import './StrategyPanel.css';

const STRATEGIES = [
  {
    id: 'FixedSize',
    icon: '📐',
    label: 'Fixed Size',
    desc: 'Split into fixed-size character chunks with configurable overlap.',
  },
  {
    id: 'Regex',
    icon: '🔍',
    label: 'Regex',
    desc: 'Split by sentence, paragraph, section, or custom regex pattern.',
  },
  {
    id: 'Semantic',
    icon: '🧠',
    label: 'Semantic',
    desc: 'Groups sentences into semantically coherent chunks by target size.',
  },
  {
    id: 'LLM',
    icon: '🤖',
    label: 'LLM',
    desc: 'Uses an AI model to detect semantic boundaries. Requires API key.',
  },
  {
    id: 'Hybrid',
    icon: '🔀',
    label: 'Hybrid',
    desc: 'Paragraph split first, then fixed-size for oversized sections.',
  },
];

export default function StrategyPanel({ selected, onSelect }) {
  return (
    <aside className="strategy-panel">
      <h2 className="panel-title">Strategy</h2>
      <div className="strategy-list">
        {STRATEGIES.map(s => (
          <button
            key={s.id}
            className={`strategy-card${selected === s.id ? ' selected' : ''}`}
            onClick={() => onSelect(s.id)}
          >
            <span className="strategy-icon">{s.icon}</span>
            <div className="strategy-body">
              <span className="strategy-label">{s.label}</span>
              <span className="strategy-desc">{s.desc}</span>
            </div>
            {selected === s.id && <span className="strategy-check">✓</span>}
          </button>
        ))}
      </div>
    </aside>
  );
}
