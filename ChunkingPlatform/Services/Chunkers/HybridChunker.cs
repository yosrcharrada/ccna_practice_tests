using ChunkingPlatform.Models;

namespace ChunkingPlatform.Services.Chunkers;

public class HybridChunker : IChunker
{
    private readonly RegexChunker _regex = new();
    private readonly FixedSizeChunker _fixedSize = new();

    public List<ChunkItem> Chunk(string text, ChunkRequest request)
    {
        // First pass: paragraph-level split
        var paragraphRequest = new ChunkRequest
        {
            Strategy = request.Strategy,
            ChunkSize = request.ChunkSize,
            Overlap = request.Overlap,
            SplitBy = "paragraph"
        };

        var paragraphChunks = _regex.Chunk(text, paragraphRequest);

        // Second pass: split oversized paragraphs using FixedSize
        var result = new List<ChunkItem>();
        int index = 0;

        foreach (var chunk in paragraphChunks)
        {
            if (chunk.CharCount <= request.ChunkSize)
            {
                result.Add(FixedSizeChunker.CreateChunk(index++, chunk.Text, request.Strategy));
            }
            else
            {
                var subChunks = _fixedSize.Chunk(chunk.Text, request);
                foreach (var sub in subChunks)
                {
                    result.Add(FixedSizeChunker.CreateChunk(index++, sub.Text, request.Strategy));
                }
            }
        }

        return result;
    }
}
