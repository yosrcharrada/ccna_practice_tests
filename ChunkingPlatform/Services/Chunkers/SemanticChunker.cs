using System.Text.RegularExpressions;
using ChunkingPlatform.Models;

namespace ChunkingPlatform.Services.Chunkers;

public class SemanticChunker : IChunker
{
    public List<ChunkItem> Chunk(string text, ChunkRequest request)
    {
        // Split into sentences first
        var sentences = Regex.Split(text, @"(?<=[.!?])\s+")
            .Select(s => s.Trim())
            .Where(s => !string.IsNullOrWhiteSpace(s))
            .ToList();

        var chunks = new List<ChunkItem>();
        int index = 0;
        var currentGroup = new System.Text.StringBuilder();

        foreach (var sentence in sentences)
        {
            if (currentGroup.Length > 0 && currentGroup.Length + sentence.Length + 1 > request.ChunkSize)
            {
                string chunkText = currentGroup.ToString().Trim();
                if (!string.IsNullOrWhiteSpace(chunkText))
                {
                    chunks.Add(FixedSizeChunker.CreateChunk(index++, chunkText, request.Strategy));
                }
                currentGroup.Clear();
            }

            if (currentGroup.Length > 0) currentGroup.Append(' ');
            currentGroup.Append(sentence);
        }

        // Flush remaining
        if (currentGroup.Length > 0)
        {
            string remaining = currentGroup.ToString().Trim();
            if (!string.IsNullOrWhiteSpace(remaining))
            {
                chunks.Add(FixedSizeChunker.CreateChunk(index, remaining, request.Strategy));
            }
        }

        return chunks;
    }
}
