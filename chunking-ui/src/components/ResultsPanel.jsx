import { useState } from 'react';
import './ResultsPanel.css';

export default function ResultsPanel({ results }) {
  if (!results || results.length === 0) {
    return (
      <div className="results-empty">
        <div className="empty-icon">📊</div>
        <p>Results will appear here after processing.</p>
      </div>
    );
  }

  const totalChunks = results.reduce((s, r) => s + r.totalChunks, 0);
  const allChunks = results.flatMap(r => r.chunks);
  const avgSize = allChunks.length > 0
    ? Math.round(allChunks.reduce((s, c) => s + c.charCount, 0) / allChunks.length)
    : 0;
  const totalTime = results.reduce((s, r) => s + r.processingTimeMs, 0);

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(results, null, 2)], { type: 'application/json' });
    download(blob, 'chunks.json');
  };

  const exportCsv = () => {
    const rows = [['File', 'Index', 'Strategy', 'WordCount', 'CharCount', 'Text']];
    for (const r of results) {
      for (const c of r.chunks) {
        rows.push([r.fileName, c.index, c.strategy, c.wordCount, c.charCount,
          `"${c.text.replace(/"/g, '""')}"`]);
      }
    }
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    download(blob, 'chunks.csv');
  };

  const download = (blob, name) => {
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = name;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="results-panel">
      <div className="results-header">
        <h2 className="panel-title">Results</h2>
        <div className="export-btns">
          <button className="export-btn" onClick={exportJson}>⬇ JSON</button>
          <button className="export-btn" onClick={exportCsv}>⬇ CSV</button>
        </div>
      </div>

      <div className="stats-bar">
        <StatCard label="Files" value={results.length} />
        <StatCard label="Total Chunks" value={totalChunks} />
        <StatCard label="Avg Size" value={`${avgSize} chars`} />
        <StatCard label="Time" value={`${totalTime}ms`} />
      </div>

      <div className="file-results">
        {results.map(result => (
          <FileResult key={result.fileName} result={result} />
        ))}
      </div>
    </div>
  );
}

function StatCard({ label, value }) {
  return (
    <div className="stat-card">
      <span className="stat-value">{value}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
}

function FileResult({ result }) {
  return (
    <div className="file-result">
      <div className="file-result-header">
        <span className="file-result-icon">📁</span>
        <span className="file-result-name">{result.fileName}</span>
        <span className="badge">{result.totalChunks} chunks</span>
        <span className="file-time">{result.processingTimeMs}ms</span>
      </div>
      <div className="chunks-grid">
        {result.chunks.map(chunk => (
          <ChunkCard key={chunk.index} chunk={chunk} />
        ))}
      </div>
    </div>
  );
}

function ChunkCard({ chunk }) {
  const [expanded, setExpanded] = useState(false);
  const preview = chunk.text.slice(0, 200);
  const hasMore = chunk.text.length > 200;

  return (
    <div className="chunk-card">
      <div className="chunk-header">
        <span className="badge chunk-index">#{chunk.index + 1}</span>
        <div className="chunk-meta">
          <span>{chunk.wordCount}w</span>
          <span>{chunk.charCount}c</span>
        </div>
      </div>
      <p className="chunk-text">
        {expanded ? chunk.text : preview}
        {!expanded && hasMore && '…'}
      </p>
      {hasMore && (
        <button
          className="expand-btn"
          onClick={() => setExpanded(v => !v)}
        >
          {expanded ? 'Show less' : 'Show more'}
        </button>
      )}
    </div>
  );
}
