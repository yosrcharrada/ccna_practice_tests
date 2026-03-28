import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import './UploadZone.css';

export default function UploadZone({ files, onFilesChange }) {
  const onDrop = useCallback((accepted) => {
    const pdfs = accepted.filter(f => f.name.endsWith('.pdf'));
    onFilesChange(prev => {
      const existingNames = new Set(prev.map(f => f.name));
      const newOnes = pdfs.filter(f => !existingNames.has(f.name));
      return [...prev, ...newOnes];
    });
  }, [onFilesChange]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { 'application/pdf': ['.pdf'] },
    multiple: true,
  });

  const removeFile = (name) => {
    onFilesChange(prev => prev.filter(f => f.name !== name));
  };

  return (
    <div className="upload-zone-wrapper">
      <div {...getRootProps()} className={`dropzone${isDragActive ? ' active' : ''}`}>
        <input {...getInputProps()} />
        <div className="dropzone-icon">📄</div>
        <p className="dropzone-title">
          {isDragActive ? 'Drop your PDFs here…' : 'Drag & drop PDF files here'}
        </p>
        <p className="dropzone-subtitle">or click to browse</p>
      </div>

      {files.length > 0 && (
        <ul className="file-list">
          {files.map(file => (
            <li key={file.name} className="file-item">
              <span className="file-icon">📑</span>
              <span className="file-name">{file.name}</span>
              <span className="file-size">{(file.size / 1024).toFixed(1)} KB</span>
              <button
                className="file-remove"
                onClick={() => removeFile(file.name)}
                title="Remove"
              >✕</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
