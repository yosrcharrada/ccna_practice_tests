using System.Net.Http.Json;
using System.Text.Json;
using ChunkingPlatform.Models;

namespace ChunkingPlatform.Services.Chunkers;

public class LlmChunker : IChunker
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly FixedSizeChunker _fallback = new();

    public LlmChunker(IHttpClientFactory httpClientFactory)
    {
        _httpClientFactory = httpClientFactory;
    }

    public List<ChunkItem> Chunk(string text, ChunkRequest request)
    {
        if (string.IsNullOrWhiteSpace(request.LlmApiKey))
        {
            return _fallback.Chunk(text, request);
        }

        try
        {
            return ChunkWithLlmAsync(text, request).GetAwaiter().GetResult();
        }
        catch
        {
            return _fallback.Chunk(text, request);
        }
    }

    private async Task<List<ChunkItem>> ChunkWithLlmAsync(string text, ChunkRequest request)
    {
        // Truncate very long texts for LLM processing
        string processText = text.Length > 8000 ? text[..8000] : text;

        var prompt = $"""
            Split the following text into semantically coherent chunks of approximately {request.ChunkSize} characters each.
            Return ONLY a JSON array of strings, where each string is a chunk. No explanations.

            Text:
            {processText}
            """;

        var payload = new
        {
            model = request.LlmModel ?? "gpt-4o-mini",
            messages = new[]
            {
                new { role = "system", content = "You are a text chunking assistant. Return only valid JSON arrays." },
                new { role = "user", content = prompt }
            },
            temperature = 0.1
        };

        var client = _httpClientFactory.CreateClient("openai");
        client.DefaultRequestHeaders.Authorization =
            new System.Net.Http.Headers.AuthenticationHeaderValue("Bearer", request.LlmApiKey);

        var response = await client.PostAsJsonAsync(
            "https://api.openai.com/v1/chat/completions", payload);

        response.EnsureSuccessStatusCode();

        using var doc = await JsonDocument.ParseAsync(await response.Content.ReadAsStreamAsync());
        var content = doc.RootElement
            .GetProperty("choices")[0]
            .GetProperty("message")
            .GetProperty("content")
            .GetString() ?? "[]";

        // Parse the JSON array of chunks
        var chunkTexts = JsonSerializer.Deserialize<List<string>>(content) ?? new();

        int index = 0;
        return chunkTexts
            .Where(c => !string.IsNullOrWhiteSpace(c))
            .Select(c => FixedSizeChunker.CreateChunk(index++, c.Trim(), request.Strategy))
            .ToList();
    }
}
