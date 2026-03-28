import { useState } from 'react';
import './ConfigPanel.css';

const MODELS = ['gpt-4o-mini', 'gpt-4o', 'gpt-4-turbo', 'gpt-3.5-turbo'];

export default function ConfigPanel({ config, onChange, onProcess, disabled }) {
  const [showKey, setShowKey] = useState(false);

  const update = (field, value) => onChange(prev => ({ ...prev, [field]: value }));

  return (
    <div className="config-panel">
      <h2 className="panel-title">Configuration</h2>

      <div className="config-grid">
        <div className="config-field">
          <label>Chunk Size <span className="config-value">{config.chunkSize}</span></label>
          <input
            type="range" min="100" max="2000" step="50"
            value={config.chunkSize}
            onChange={e => update('chunkSize', Number(e.target.value))}
          />
          <div className="range-labels"><span>100</span><span>2000</span></div>
        </div>

        <div className="config-field">
          <label>Overlap <span className="config-value">{config.overlap}</span></label>
          <input
            type="range" min="0" max="200" step="10"
            value={config.overlap}
            onChange={e => update('overlap', Number(e.target.value))}
          />
          <div className="range-labels"><span>0</span><span>200</span></div>
        </div>

        {config.strategy === 'Regex' && (
          <div className="config-field">
            <label>Split By</label>
            <select
              value={config.splitBy}
              onChange={e => update('splitBy', e.target.value)}
            >
              <option value="paragraph">Paragraph</option>
              <option value="sentence">Sentence</option>
              <option value="section">Section</option>
              <option value="custom">Custom Regex</option>
            </select>
          </div>
        )}

        {config.strategy === 'Regex' && config.splitBy === 'custom' && (
          <div className="config-field">
            <label>Custom Pattern</label>
            <input
              type="text"
              placeholder="e.g. \n\n or (?<=[.!?])\s+"
              value={config.regexPattern ?? ''}
              onChange={e => update('regexPattern', e.target.value)}
            />
          </div>
        )}

        {config.strategy === 'LLM' && (
          <>
            <div className="config-field">
              <label>OpenAI API Key</label>
              <div className="input-row">
                <input
                  type={showKey ? 'text' : 'password'}
                  placeholder="sk-..."
                  value={config.llmApiKey ?? ''}
                  onChange={e => update('llmApiKey', e.target.value)}
                />
                <button
                  type="button"
                  className="toggle-btn"
                  onClick={() => setShowKey(v => !v)}
                >{showKey ? '🙈' : '👁'}</button>
              </div>
            </div>
            <div className="config-field">
              <label>Model</label>
              <select
                value={config.llmModel ?? 'gpt-4o-mini'}
                onChange={e => update('llmModel', e.target.value)}
              >
                {MODELS.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>
          </>
        )}
      </div>

      <button
        className="process-btn"
        onClick={onProcess}
        disabled={disabled}
      >
        {disabled ? (
          <><span className="btn-spinner" /> Processing…</>
        ) : (
          <>⚡ Process Files</>
        )}
      </button>
    </div>
  );
}
