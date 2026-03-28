using ChunkingPlatform.Models;

namespace ChunkingPlatform.Services.Chunkers;

public interface IChunker
{
    List<ChunkItem> Chunk(string text, ChunkRequest request);
}
