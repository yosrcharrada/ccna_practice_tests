using System.Diagnostics;
using ChunkingPlatform.Models;
using ChunkingPlatform.Services;
using ChunkingPlatform.Services.Chunkers;
using Microsoft.AspNetCore.Mvc;

namespace ChunkingPlatform.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ChunkController : ControllerBase
{
    private readonly PdfExtractorService _extractor;
    private readonly FixedSizeChunker _fixedSize;
    private readonly RegexChunker _regex;
    private readonly SemanticChunker _semantic;
    private readonly LlmChunker _llm;
    private readonly HybridChunker _hybrid;

    public ChunkController(
        PdfExtractorService extractor,
        FixedSizeChunker fixedSize,
        RegexChunker regex,
        SemanticChunker semantic,
        LlmChunker llm,
        HybridChunker hybrid)
    {
        _extractor = extractor;
        _fixedSize = fixedSize;
        _regex = regex;
        _semantic = semantic;
        _llm = llm;
        _hybrid = hybrid;
    }

    [HttpPost("upload-and-process")]
    [RequestSizeLimit(100_000_000)]
    public async Task<IActionResult> UploadAndProcess(
        [FromForm] IList<IFormFile> files,
        [FromForm] string strategy = "FixedSize",
        [FromForm] int chunkSize = 500,
        [FromForm] int overlap = 50,
        [FromForm] string? llmApiKey = null,
        [FromForm] string? llmModel = "gpt-4o-mini",
        [FromForm] string? splitBy = "paragraph",
        [FromForm] string? regexPattern = null)
    {
        if (files == null || files.Count == 0)
            return BadRequest(new { error = "No files provided." });

        var request = new ChunkRequest
        {
            Strategy = strategy,
            ChunkSize = chunkSize,
            Overlap = overlap,
            LlmApiKey = llmApiKey,
            LlmModel = llmModel,
            SplitBy = splitBy,
            RegexPattern = regexPattern
        };

        var results = new List<ChunkResult>();

        foreach (var file in files)
        {
            if (!file.FileName.EndsWith(".pdf", StringComparison.OrdinalIgnoreCase))
            {
                results.Add(new ChunkResult
                {
                    FileName = file.FileName,
                    Chunks = new(),
                    TotalChunks = 0,
                    ProcessingTimeMs = 0
                });
                continue;
            }

            var sw = Stopwatch.StartNew();

            string text;
            await using (var stream = file.OpenReadStream())
            {
                text = _extractor.ExtractText(stream);
            }

            var chunks = GetChunker(strategy).Chunk(text, request);
            sw.Stop();

            results.Add(new ChunkResult
            {
                FileName = file.FileName,
                Chunks = chunks,
                TotalChunks = chunks.Count,
                ProcessingTimeMs = sw.ElapsedMilliseconds
            });
        }

        return Ok(results);
    }

    [HttpGet("strategies")]
    public IActionResult GetStrategies()
    {
        var strategies = new[]
        {
            new { name = "FixedSize",  description = "Splits text into fixed-size character chunks with configurable overlap." },
            new { name = "Regex",      description = "Splits text using regex patterns: by sentence, paragraph, section, or custom pattern." },
            new { name = "Semantic",   description = "Groups sentences into semantically coherent chunks up to the target size." },
            new { name = "LLM",        description = "Uses an OpenAI model to identify semantic boundaries. Falls back to FixedSize without an API key." },
            new { name = "Hybrid",     description = "Applies paragraph splitting first, then FixedSize for oversized paragraphs." }
        };

        return Ok(strategies);
    }

    private IChunker GetChunker(string strategy) => strategy.ToLower() switch
    {
        "regex"    => _regex,
        "semantic" => _semantic,
        "llm"      => _llm,
        "hybrid"   => _hybrid,
        _          => _fixedSize
    };
}
