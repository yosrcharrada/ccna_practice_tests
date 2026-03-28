using ChunkingPlatform.Models;

namespace ChunkingPlatform.Services.Chunkers;

public class FixedSizeChunker : IChunker
{
    public List<ChunkItem> Chunk(string text, ChunkRequest request)
    {
        var chunks = new List<ChunkItem>();
        int chunkSize = Math.Max(1, request.ChunkSize);
        int overlap = Math.Max(0, Math.Min(request.Overlap, chunkSize - 1));
        int index = 0;
        int position = 0;

        while (position < text.Length)
        {
            int end = Math.Min(position + chunkSize, text.Length);
            string chunkText = text[position..end].Trim();

            if (!string.IsNullOrWhiteSpace(chunkText))
            {
                chunks.Add(CreateChunk(index++, chunkText, request.Strategy));
            }

            position += chunkSize - overlap;
        }

        return chunks;
    }

    internal static ChunkItem CreateChunk(int index, string text, string strategy) => new()
    {
        Index = index,
        Text = text,
        CharCount = text.Length,
        WordCount = text.Split(' ', StringSplitOptions.RemoveEmptyEntries).Length,
        Strategy = strategy
    };
}
