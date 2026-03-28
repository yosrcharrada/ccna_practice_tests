using System.Text.RegularExpressions;
using ChunkingPlatform.Models;

namespace ChunkingPlatform.Services.Chunkers;

public class RegexChunker : IChunker
{
    public List<ChunkItem> Chunk(string text, ChunkRequest request)
    {
        string splitBy = request.SplitBy?.ToLower() ?? "paragraph";
        string[] segments;

        switch (splitBy)
        {
            case "sentence":
                segments = Regex.Split(text, @"(?<=[.!?])\s+");
                break;
            case "section":
                segments = Regex.Split(text, @"(?m)(?=^(?:[A-Z][A-Z\s]{4,}|(?:\d+\.)+\s).*)");
                break;
            case "custom" when !string.IsNullOrWhiteSpace(request.RegexPattern):
                segments = Regex.Split(text, request.RegexPattern);
                break;
            default: // paragraph
                segments = Regex.Split(text, @"\n\s*\n");
                break;
        }

        int index = 0;
        return segments
            .Select(s => s.Trim())
            .Where(s => !string.IsNullOrWhiteSpace(s))
            .Select(s => FixedSizeChunker.CreateChunk(index++, s, request.Strategy))
            .ToList();
    }
}
