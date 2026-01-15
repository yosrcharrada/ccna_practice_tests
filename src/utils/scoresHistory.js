// Utility functions for managing exam scores history in localStorage

const STORAGE_KEY = 'ccna_exam_scores_history';

/**
 * Get all exam scores from localStorage
 * @returns {Array} Array of exam score objects
 */
export const getScoresHistory = () => {
  try {
    const history = localStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) : [];
  } catch (error) {
    console.error('Error reading scores history:', error);
    return [];
  }
};

/**
 * Save a new exam score to localStorage
 * @param {Object} scoreData - The exam score data to save
 * @param {number} scoreData.score - The score percentage
 * @param {number} scoreData.points - The points achieved (out of 1000)
 * @param {string} scoreData.examName - The exam identifier (Exam A, B, C, etc.)
 * @param {number} scoreData.totalQuestions - Total number of questions
 * @param {number} scoreData.correctAnswers - Number of correct answers
 * @param {boolean} scoreData.passed - Whether the exam was passed
 * @param {string} scoreData.dateTime - ISO timestamp of completion
 */
export const saveScore = (scoreData) => {
  try {
    const history = getScoresHistory();
    const newScore = {
      // Use timestamp + random number to avoid collisions
      id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
      ...scoreData,
      dateTime: scoreData.dateTime || new Date().toISOString()
    };
    history.push(newScore);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    return true;
  } catch (error) {
    console.error('Error saving score:', error);
    return false;
  }
};

/**
 * Clear all scores history
 */
export const clearScoresHistory = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
    return true;
  } catch (error) {
    console.error('Error clearing scores history:', error);
    return false;
  }
};

/**
 * Get statistics from scores history
 * @returns {Object} Statistics object
 */
export const getStatistics = () => {
  const history = getScoresHistory();
  
  if (history.length === 0) {
    return {
      totalExams: 0,
      averageScore: 0,
      bestScore: 0,
      passRate: 0
    };
  }

  const totalExams = history.length;
  const averageScore = history.reduce((sum, score) => sum + parseFloat(score.score), 0) / totalExams;
  const bestScore = Math.max(...history.map(score => parseFloat(score.score)));
  const passedExams = history.filter(score => score.passed).length;
  const passRate = (passedExams / totalExams) * 100;

  return {
    totalExams,
    averageScore: averageScore.toFixed(1),
    bestScore: bestScore.toFixed(1),
    passRate: passRate.toFixed(1)
  };
};

/**
 * Sort scores by field and direction
 * @param {Array} scores - Array of scores
 * @param {string} field - Field to sort by ('dateTime' or 'score')
 * @param {string} direction - 'asc' or 'desc'
 * @returns {Array} Sorted array
 */
export const sortScores = (scores, field = 'dateTime', direction = 'desc') => {
  return [...scores].sort((a, b) => {
    let aVal = a[field];
    let bVal = b[field];

    if (field === 'score' || field === 'points') {
      aVal = parseFloat(aVal);
      bVal = parseFloat(bVal);
    }

    if (aVal === bVal) {
      return 0;
    }

    if (direction === 'asc') {
      return aVal > bVal ? 1 : -1;
    } else {
      return aVal < bVal ? 1 : -1;
    }
  });
};

/**
 * Filter scores by exam name
 * @param {Array} scores - Array of scores
 * @param {string} examName - Exam name to filter by (or 'all')
 * @returns {Array} Filtered array
 */
export const filterScoresByExam = (scores, examName) => {
  if (!examName || examName === 'all') {
    return scores;
  }
  return scores.filter(score => score.examName === examName);
};
