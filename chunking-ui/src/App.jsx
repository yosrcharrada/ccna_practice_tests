import { useState } from 'react';
import Header from './components/Header';
import StrategyPanel from './components/StrategyPanel';
import UploadZone from './components/UploadZone';
import ConfigPanel from './components/ConfigPanel';
import ResultsPanel from './components/ResultsPanel';
import { processFiles } from './api/chunkingApi';
import './App.css';

const DEFAULT_CONFIG = {
  strategy: 'FixedSize',
  chunkSize: 500,
  overlap: 50,
  splitBy: 'paragraph',
  llmApiKey: '',
  llmModel: 'gpt-4o-mini',
  regexPattern: '',
};

export default function App() {
  const [files, setFiles] = useState([]);
  const [config, setConfig] = useState(DEFAULT_CONFIG);
  const [results, setResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStrategySelect = (strategy) => {
    setConfig(prev => ({ ...prev, strategy }));
  };

  const handleProcess = async () => {
    if (files.length === 0) {
      setError('Please upload at least one PDF file.');
      return;
    }

    setError(null);
    setLoading(true);

    try {
      const data = await processFiles(files, config);
      setResults(data);
    } catch (err) {
      setError(
        err?.response?.data?.error ||
        err?.message ||
        'An error occurred while processing. Is the backend running?'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Header />

      <main className="app-main">
        <div className="app-grid">
          {/* Left: Strategy */}
          <StrategyPanel selected={config.strategy} onSelect={handleStrategySelect} />

          {/* Center: Upload + Config */}
          <div className="center-col">
            <section className="card">
              <h2 className="section-title">Upload PDFs</h2>
              <UploadZone files={files} onFilesChange={setFiles} />
            </section>

            {error && <div className="error-banner">⚠ {error}</div>}

            <section className="card">
              <ConfigPanel
                config={config}
                onChange={setConfig}
                onProcess={handleProcess}
                disabled={loading}
              />
            </section>
          </div>

          {/* Right: Results */}
          <section className="card results-col">
            <ResultsPanel results={results} />
          </section>
        </div>
      </main>

      {loading && (
        <div className="loading-overlay">
          <div className="spinner" />
          <span className="loading-text">Processing PDFs…</span>
        </div>
      )}
    </>
  );
}
