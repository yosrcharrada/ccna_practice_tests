/**
 * Utility functions for managing exam state in localStorage
 */

const STORAGE_KEY = 'ccna_exam_state';

/**
 * Save exam state to localStorage
 * @param {Object} state - The exam state to save
 */
export const saveExamState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Failed to save exam state:', error);
  }
};

/**
 * Load exam state from localStorage
 * @returns {Object|null} - The saved exam state or null if none exists
 */
export const loadExamState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  } catch (error) {
    console.error('Failed to load exam state:', error);
    return null;
  }
};

/**
 * Clear exam state from localStorage
 */
export const clearExamState = () => {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (error) {
    console.error('Failed to clear exam state:', error);
  }
};

/**
 * Check if there's an unfinished exam
 * @returns {boolean} - True if there's an unfinished exam
 */
export const hasUnfinishedExam = () => {
  const state = loadExamState();
  return state && state.examStarted && !state.examSubmitted;
};
