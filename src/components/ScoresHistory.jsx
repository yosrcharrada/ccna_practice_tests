import { useState, useEffect } from 'react';
import './ScoresHistory.css';
import {
  getScoresHistory,
  clearScoresHistory,
  getStatistics,
  sortScores,
  filterScoresByExam
} from '../utils/scoresHistory';

const ScoresHistory = ({ onBack }) => {
  const [scores, setScores] = useState([]);
  const [filteredScores, setFilteredScores] = useState([]);
  const [statistics, setStatistics] = useState({});
  const [sortField, setSortField] = useState('dateTime');
  const [sortDirection, setSortDirection] = useState('desc');
  const [filterExam, setFilterExam] = useState('all');
  const [showClearConfirm, setShowClearConfirm] = useState(false);

  useEffect(() => {
    loadScores();
  }, []);

  useEffect(() => {
    // Apply filtering and sorting
    let processed = filterScoresByExam(scores, filterExam);
    processed = sortScores(processed, sortField, sortDirection);
    setFilteredScores(processed);
  }, [scores, filterExam, sortField, sortDirection]);

  const loadScores = () => {
    const history = getScoresHistory();
    setScores(history);
    setStatistics(getStatistics());
  };

  const handleClearHistory = () => {
    if (clearScoresHistory()) {
      loadScores();
      setShowClearConfirm(false);
    }
  };

  const formatDateTime = (isoString) => {
    const date = new Date(isoString);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const handleSortChange = (field) => {
    if (sortField === field) {
      // Toggle direction if clicking same field
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection(field === 'dateTime' ? 'desc' : 'desc');
    }
  };

  return (
    <div className="scores-history-screen">
      <div className="scores-history-container">
        <div className="history-header">
          <button className="back-button" onClick={onBack}>
            ← Back to Home
          </button>
          <h1>Exam Scores History</h1>
        </div>

        {/* Statistics Section */}
        <div className="statistics-panel">
          <div className="stat-card">
            <div className="stat-value">{statistics.totalExams || 0}</div>
            <div className="stat-label">Total Exams</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{statistics.averageScore || 0}%</div>
            <div className="stat-label">Average Score</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{statistics.bestScore || 0}%</div>
            <div className="stat-label">Best Score</div>
          </div>
          <div className="stat-card">
            <div className="stat-value">{statistics.passRate || 0}%</div>
            <div className="stat-label">Pass Rate</div>
          </div>
        </div>

        {/* Controls Section */}
        <div className="history-controls">
          <div className="filter-controls">
            <label>
              Filter by Exam:
              <select 
                value={filterExam} 
                onChange={(e) => setFilterExam(e.target.value)}
              >
                <option value="all">All Exams</option>
                <option value="Exam A">Exam A</option>
                <option value="Exam B">Exam B</option>
                <option value="Exam C">Exam C</option>
                <option value="Exam D">Exam D</option>
                <option value="Custom Exam">Custom Exam</option>
                <option value="Random Exam">Random Exam</option>
              </select>
            </label>

            <label>
              Sort by:
              <select 
                value={sortField} 
                onChange={(e) => handleSortChange(e.target.value)}
              >
                <option value="dateTime">Date (Newest First)</option>
                <option value="score">Score (Highest First)</option>
              </select>
            </label>
          </div>

          <button 
            className="clear-history-button"
            onClick={() => setShowClearConfirm(true)}
            disabled={scores.length === 0}
          >
            Clear History
          </button>
        </div>

        {/* Scores Table */}
        {filteredScores.length === 0 ? (
          <div className="no-history-message">
            <p>No exam history found.</p>
            <p>Complete an exam to see your scores here!</p>
          </div>
        ) : (
          <div className="scores-table-container">
            <table className="scores-table">
              <thead>
                <tr>
                  <th onClick={() => handleSortChange('dateTime')}>
                    Date & Time {sortField === 'dateTime' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Exam</th>
                  <th onClick={() => handleSortChange('score')}>
                    Score {sortField === 'score' && (sortDirection === 'asc' ? '↑' : '↓')}
                  </th>
                  <th>Points</th>
                  <th>Questions</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                {filteredScores.map((score) => (
                  <tr key={score.id} className={score.passed ? 'passed-row' : 'failed-row'}>
                    <td>{formatDateTime(score.dateTime)}</td>
                    <td>{score.examName}</td>
                    <td className="score-cell">{score.score}%</td>
                    <td>{score.points}/1000</td>
                    <td>{score.correctAnswers}/{score.totalQuestions}</td>
                    <td>
                      <span className={`result-badge ${score.passed ? 'pass' : 'fail'}`}>
                        {score.passed ? 'PASS' : 'FAIL'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Clear Confirmation Modal */}
      {showClearConfirm && (
        <div className="modal-overlay" onClick={() => setShowClearConfirm(false)}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setShowClearConfirm(false)}>×</button>
            <h2>Clear All History?</h2>
            <p>This will permanently delete all exam scores. This action cannot be undone.</p>
            <div className="modal-actions">
              <button className="modal-confirm-button" onClick={handleClearHistory}>
                Clear History
              </button>
              <button className="modal-cancel-button" onClick={() => setShowClearConfirm(false)}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ScoresHistory;
