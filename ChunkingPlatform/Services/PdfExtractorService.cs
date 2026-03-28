using UglyToad.PdfPig;
using UglyToad.PdfPig.Content;

namespace ChunkingPlatform.Services;

public class PdfExtractorService
{
    public string ExtractText(Stream pdfStream)
    {
        using var document = PdfDocument.Open(pdfStream);
        var sb = new System.Text.StringBuilder();

        foreach (Page page in document.GetPages())
        {
            var words = page.GetWords();
            sb.AppendLine(string.Join(" ", words.Select(w => w.Text)));
        }

        return sb.ToString();
    }

    public string ExtractText(string filePath)
    {
        using var stream = File.OpenRead(filePath);
        return ExtractText(stream);
    }
}
