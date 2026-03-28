using ChunkingPlatform.Services;
using ChunkingPlatform.Services.Chunkers;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddHttpClient("openai");

builder.Services.AddSingleton<PdfExtractorService>();
builder.Services.AddSingleton<FixedSizeChunker>();
builder.Services.AddSingleton<RegexChunker>();
builder.Services.AddSingleton<SemanticChunker>();
builder.Services.AddSingleton<HybridChunker>();
builder.Services.AddSingleton<LlmChunker>();

builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(policy =>
    {
        policy
            .WithOrigins("http://localhost:5173", "http://localhost:5174")
            .AllowAnyHeader()
            .AllowAnyMethod();
    });
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors();
app.UseAuthorization();
app.MapControllers();

app.Run();
