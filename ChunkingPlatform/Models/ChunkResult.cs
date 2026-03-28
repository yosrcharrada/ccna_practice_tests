namespace ChunkingPlatform.Models;

public class ChunkResult
{
    public string FileName { get; set; } = "";
    public List<ChunkItem> Chunks { get; set; } = new();
    public int TotalChunks { get; set; }
    public long ProcessingTimeMs { get; set; }
}

public class ChunkItem
{
    public int Index { get; set; }
    public string Text { get; set; } = "";
    public int CharCount { get; set; }
    public int WordCount { get; set; }
    public string Strategy { get; set; } = "";
}
