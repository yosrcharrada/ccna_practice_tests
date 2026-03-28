import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="logo">
          <span className="logo-icon">⚡</span>
          <span className="logo-text">ChunkForge</span>
        </div>
        <nav className="header-nav">
          <span className="nav-tag">PDF Chunking Platform</span>
        </nav>
        <div className="header-actions">
          <span title="Settings" className="header-icon">⚙</span>
        </div>
      </div>
    </header>
  );
}
