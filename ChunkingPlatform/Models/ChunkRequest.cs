namespace ChunkingPlatform.Models;

public class ChunkRequest
{
    public string Strategy { get; set; } = "FixedSize";
    public int ChunkSize { get; set; } = 500;
    public int Overlap { get; set; } = 50;
    public string? LlmApiKey { get; set; }
    public string? LlmModel { get; set; } = "gpt-4o-mini";
    public string? RegexPattern { get; set; }
    public string? SplitBy { get; set; } = "paragraph";
}
