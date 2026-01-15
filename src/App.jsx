import { useState, useEffect, useCallback } from 'react';
import './App.css';
import './Matching.css';  // ← Add this line
import { examBanks, getRandomExam } from './data';
import ScoresHistory from './components/ScoresHistory';
import { saveScore } from './utils/scoresHistory';

// Constants
const EXAM_DURATION_SECONDS = 1800; // 30 minutes
const PASSING_SCORE_PERCENTAGE = 70;

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION_SECONDS);
  const [markedForReview, setMarkedForReview] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [currentView, setCurrentView] = useState('start'); // 'start', 'exam', 'results', 'review', 'history'
  const [selectedExamBank, setSelectedExamBank] = useState('examA');
  const [currentExamQuestions, setCurrentExamQuestions] = useState([]);

  // Matching question state
  const [matchingAnswers, setMatchingAnswers] = useState({});
  const [selectedTerm, setSelectedTerm] = useState(null);

  const calculateScoreForSubmission = useCallback(() => {
    let correct = 0;
    currentExamQuestions.forEach((q) => {
      const userAnswer = answers[q.id];
      const correctAnswer = q.correctAnswer;
      
      if (q.questionType === "Multi-select") {
        const sortedUser = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
        const sortedCorrect = Array.isArray(correctAnswer) ? [...correctAnswer].sort() : [];
        
        if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) {
          correct++;
        }
      } else if (q.questionType === "Matching") {
        const userMatches = matchingAnswers[q.id] || {};
        const correctMatches = q.correctAnswer;
        
        if (JSON.stringify(userMatches) === JSON.stringify(correctMatches)) {
          correct++;
        }
      } else {
        if (userAnswer === correctAnswer) {
          correct++;
        }
      }
    });
    
    const percentage = ((correct / currentExamQuestions.length) * 100).toFixed(1);
    const points = Math.round((correct / currentExamQuestions.length) * 1000);
    return {
      correct,
      total: currentExamQuestions.length,
      percentage,
      points
    };
  }, [currentExamQuestions, answers, matchingAnswers]);

  const handleSubmitExam = useCallback(() => {
    setExamSubmitted(true);
    setCurrentView('results');
    
    // Calculate and save score to history
    const score = calculateScoreForSubmission();
    const examName = getExamBankDisplayName(selectedExamBank);
    const scoreData = {
      score: score.percentage,
      points: score.points,
      examName: examName,
      totalQuestions: score.total,
      correctAnswers: score.correct,
      passed: score.points >= 825,
      dateTime: new Date().toISOString()
    };
    saveScore(scoreData);
  }, [selectedExamBank, calculateScoreForSubmission]);

  const handleToggleMarkForReview = () => {
    const questionId = currentExamQuestions[currentQuestion]. id;
    setMarkedForReview(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const handleToggleShowAnswer = () => {
    setShowAnswer(prev => !prev);
  };

  const handleOpenGradeModal = () => {
    setShowGradeModal(true);
  };

  const handleCloseGradeModal = () => {
    setShowGradeModal(false);
  };

  const handleConfirmGrade = () => {
    setShowGradeModal(false);
    handleSubmitExam();
  };

  const handleOpenQuestionReview = () => {
    setCurrentView('review');
  };

  const handleBackToResults = () => {
    setCurrentView('results');
  };

  const calculateCurrentPercentage = () => {
    if (Object.keys(answers).length === 0) return 0;
    let correct = 0;
    Object.keys(answers).forEach((questionId) => {
      const question = currentExamQuestions.find(q => q.id === parseInt(questionId));
      if (question) {
        const userAnswer = answers[questionId];
        const correctAnswer = question.correctAnswer;
        
        if (question.questionType === "Multi-select") {
          const sortedUser = Array.isArray(userAnswer) ? [...userAnswer]. sort() : [];
          const sortedCorrect = Array.isArray(correctAnswer) ? [...correctAnswer].sort() : [];
          
          if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) {
            correct++;
          }
        } else if (question.questionType === "Matching") {
          const userMatches = matchingAnswers[questionId] || {};
          const correctMatches = question.correctAnswer;
          
          if (JSON. stringify(userMatches) === JSON.stringify(correctMatches)) {
            correct++;
          }
        } else {
          if (userAnswer === correctAnswer) {
            correct++;
          }
        }
      }
    });
    return ((correct / Object.keys(answers).length) * 100).toFixed(1);
  };

  useEffect(() => {
    if (examStarted && !examSubmitted && timeRemaining > 0) {
      const timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
    if (timeRemaining === 0 && examStarted && !examSubmitted) {
      handleSubmitExam();
    }
  }, [examStarted, examSubmitted, timeRemaining, handleSubmitExam]);

  // ESC key handler for modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && showGradeModal) {
        handleCloseGradeModal();
      }
    };
    
    if (showGradeModal) {
      document.addEventListener('keydown', handleEscKey);
      return () => document.removeEventListener('keydown', handleEscKey);
    }
  }, [showGradeModal]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    const question = currentExamQuestions.find(q => q.id === questionId);
    
    if (question. questionType === "Multi-select") {
      // Handle multi-select
      const currentAnswers = answers[questionId] || [];
      let newAnswers;
      
      if (currentAnswers.includes(answerIndex)) {
        // Remove if already selected
        newAnswers = currentAnswers.filter(idx => idx !== answerIndex);
      } else {
        // Add to selection
        newAnswers = [... currentAnswers, answerIndex];
      }
      
      setAnswers({ ...answers, [questionId]: newAnswers });
    } else {
      // Handle single-select
      setAnswers({ ... answers, [questionId]: answerIndex });
    }
  };

  // Handle matching question interactions
  const handleMatchingSelect = (questionId, termId, defId) => {
    if (! termId && !defId) return;

    const currentMatches = matchingAnswers[questionId] || {};

    if (termId && ! selectedTerm) {
      // Select a term
      setSelectedTerm(termId);
    } else if (defId && selectedTerm) {
      // Match the selected term with this definition
      const newMatches = { ...currentMatches, [selectedTerm]: defId };
      setMatchingAnswers({ ...matchingAnswers, [questionId]: newMatches });
      setAnswers({ ...answers, [questionId]: true }); // Mark as answered
      setSelectedTerm(null);
    } else if (termId && selectedTerm === termId) {
      // Deselect if clicking the same term again
      setSelectedTerm(null);
    } else if (termId && selectedTerm) {
      // Switch to different term
      setSelectedTerm(termId);
    }
  };

  const handleClearMatching = (questionId, termId) => {
    const currentMatches = matchingAnswers[questionId] || {};
    const newMatches = { ...currentMatches };
    delete newMatches[termId];
    setMatchingAnswers({ ... matchingAnswers, [questionId]: newMatches });
    
    if (Object.keys(newMatches).length === 0) {
      const newAnswers = { ...answers };
      delete newAnswers[questionId];
      setAnswers(newAnswers);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < currentExamQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
      setSelectedTerm(null);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
      setSelectedTerm(null);
    }
  };

  const handleQuestionJump = (index) => {
    setCurrentQuestion(index);
    setShowAnswer(false);
    setSelectedTerm(null);
  };

  const handleStartExam = () => {
    // Load questions based on selected exam bank
    let questions;
    if (selectedExamBank === 'random') {
      questions = getRandomExam(10); // Get 10 random questions
    } else {
      questions = examBanks[selectedExamBank] || [];
    }
    
    // Ensure we have at least one question before starting
    if (questions.length === 0) {
      alert('No questions available.  Please add questions to the exam bank.');
      return;
    }
    
    setCurrentExamQuestions(questions);
    setExamStarted(true);
    setAnswers({});
    setMatchingAnswers({});
    setCurrentQuestion(0);
    setExamSubmitted(false);
    setTimeRemaining(EXAM_DURATION_SECONDS);
    setMarkedForReview({});
    setShowAnswer(false);
    setCurrentView('exam');
    setSelectedTerm(null);
  };

  const calculateScore = () => {
    let correct = 0;
    currentExamQuestions.forEach((q) => {
      const userAnswer = answers[q.id];
      const correctAnswer = q.correctAnswer;
      
      if (q.questionType === "Multi-select") {
        // For multi-select, check if arrays match
        const sortedUser = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
        const sortedCorrect = Array.isArray(correctAnswer) ? [...correctAnswer].sort() : [];
        
        if (JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect)) {
          correct++;
        }
      } else if (q.questionType === "Matching") {
        // For matching, check if all pairs match
        const userMatches = matchingAnswers[q.id] || {};
        const correctMatches = q.correctAnswer;
        
        if (JSON.stringify(userMatches) === JSON.stringify(correctMatches)) {
          correct++;
        }
      } else {
        // For single-select
        if (userAnswer === correctAnswer) {
          correct++;
        }
      }
    });
    
    const percentage = ((correct / currentExamQuestions.length) * 100).toFixed(1);
    const points = Math.round((correct / currentExamQuestions.length) * 1000);
    return {
      correct,
      total: currentExamQuestions.length,
      percentage,
      points
    };
  };

  const getExamBankDisplayName = (bankKey) => {
    const names = {
      'examA':  'Exam A',
      'examB': 'Exam B',
      'examC':  'Exam C',
      'examD': 'Exam D',
      'custom': 'Custom Exam',
      'random': 'Random Exam'
    };
    return names[bankKey] || bankKey;
  };

  const getQuestionCount = (bankKey) => {
    if (bankKey === 'random') {
      return 10;
    }
    const bank = examBanks[bankKey];
    return bank ? bank.length : 0;
  };

  if (currentView === 'start' || (!examStarted && currentView !== 'history')) {
    return (
      <div className="start-screen">
        <div className="start-container-wide">
          <h1>CCNA Exam Practice</h1>
          
          <div className="start-content">
            <div className="start-left-panel">
              <div className="exam-bank-section">
                <h3>
                  Exam Bank 
                  <span className="help-icon" title="Select which exam bank to use">? </span>
                </h3>
                <div className="exam-bank-options">
                  <label className="exam-bank-option">
                    <input
                      type="radio"
                      name="examBank"
                      value="examA"
                      checked={selectedExamBank === 'examA'}
                      onChange={(e) => setSelectedExamBank(e.target.value)}
                    />
                    <span>Exam A</span>
                  </label>
                  <label className="exam-bank-option">
                    <input
                      type="radio"
                      name="examBank"
                      value="examB"
                      checked={selectedExamBank === 'examB'}
                      onChange={(e) => setSelectedExamBank(e.target.value)}
                    />
                    <span>Exam B</span>
                  </label>
                  <label className="exam-bank-option">
                    <input
                      type="radio"
                      name="examBank"
                      value="examC"
                      checked={selectedExamBank === 'examC'}
                      onChange={(e) => setSelectedExamBank(e.target. value)}
                    />
                    <span>Exam C</span>
                  </label>
                  <label className="exam-bank-option">
                    <input
                      type="radio"
                      name="examBank"
                      value="examD"
                      checked={selectedExamBank === 'examD'}
                      onChange={(e) => setSelectedExamBank(e. target.value)}
                    />
                    <span>Exam D</span>
                  </label>
                  <label className="exam-bank-option">
                    <input
                      type="radio"
                      name="examBank"
                      value="custom"
                      checked={selectedExamBank === 'custom'}
                      onChange={(e) => setSelectedExamBank(e. target.value)}
                    />
                    <span>Custom Exam</span>
                  </label>
                  <label className="exam-bank-option">
                    <input
                      type="radio"
                      name="examBank"
                      value="random"
                      checked={selectedExamBank === 'random'}
                      onChange={(e) => setSelectedExamBank(e. target.value)}
                    />
                    <span>Random Exam</span>
                  </label>
                </div>
              </div>
              
              <div className="exam-mode-section">
                <h3>
                  Exam Mode 
                  <span className="help-icon" title="Select exam mode">?</span>
                </h3>
                <div className="exam-mode-buttons">
                  <button className="mode-button active">Study Mode</button>
                  <button className="mode-button">Simulation Mode</button>
                </div>
              </div>
            </div>
            
            <div className="start-right-panel">
              <div className="exam-settings-panel">
                <div className="settings-header">
                  <h3>
                    Current Exam Settings 
                    <span className="help-icon" title="Current exam settings">?</span>
                  </h3>
                  <button className="modify-settings-btn">Modify Settings</button>
                </div>
                <div className="settings-list">
                  <p>✓ Exam is in Study mode</p>
                  <p>✓ Questions are randomized</p>
                  <p>✓ Answers are randomized</p>
                  <p>✓ Exam is not timed</p>
                  <p>✓ Show answers inline</p>
                  <p>✓ Show live scoring</p>
                  <p>✓ Always show number of correct answers</p>
                  <p>✓ This exam has {getQuestionCount(selectedExamBank)} questions</p>
                </div>
              </div>
              
              <button className="start-button" onClick={handleStartExam}>
                Begin Exam
              </button>
              
              <button className="history-button" onClick={() => setCurrentView('history')}>
                📊 View Scores History
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Scores History View
  if (currentView === 'history') {
    return <ScoresHistory onBack={() => setCurrentView('start')} />;
  }

  if (examSubmitted && currentView === 'results') {
    const score = calculateScore();
    const passed = score.points >= 825;

    return (
      <div className="results-screen">
        <div className="results-container">
          <div className="results-header">
            <button className="hamburger-menu">☰</button>
            <h1>
              Final Score: ExSim-Max for Cisco 200-301 CCNA
              <span className="demo-badge">DEMO</span>
            </h1>
          </div>
          
          <div className="result-box">
            <div className={`result-status ${passed ? 'passed' : 'failed'}`}>
              Your Result: <strong>{passed ? 'PASS' : 'FAIL'}</strong> ({score.points} Points)
            </div>
            <div className="result-info">
              <p>Passing Score: 825/1000</p>
              <p>Exam Mode: Study Mode</p>
              <p>Exam Bank: {getExamBankDisplayName(selectedExamBank)}</p>
            </div>
          </div>

          <div className="progress-bar-container">
            <div className="progress-bar-labels">
              <span>0</span>
              <span>Passing Score</span>
            </div>
            <div className="progress-bar-wrapper">
              <div className="progress-bar-background">
                <div 
                  className="progress-bar-fill" 
                  style={{ width:  `${(score.points / 1000) * 100}%` }}
                ></div>
                <div className="passing-marker" style={{ left: '82. 5%' }}></div>
              </div>
            </div>
            <div className="progress-bar-labels">
              <span>{score.points}</span>
              <span>1000</span>
            </div>
          </div>

          <a href="#" className="view-settings-link">View Exam Settings</a>

          <div className="results-actions">
            <button className="retake-button" onClick={handleStartExam}>
              Retake Exam ▼
            </button>
            <button className="question-review-button" onClick={handleOpenQuestionReview}>
              Question Review
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Question Review Page
  if (examSubmitted && currentView === 'review') {
    return (
      <div className="review-screen">
        <div className="review-container">
          <div className="review-header">
            <button className="back-button" onClick={handleBackToResults}>← Back to Results</button>
            <h1>Question Review</h1>
            <button className="filter-button">⚙ Filter</button>
          </div>

          <div className="review-tabs">
            <button className="review-tab active">Question Review</button>
            <button className="review-tab">Category Breakdown</button>
            <button className="review-tab">References</button>
          </div>

          <div className="question-cards">
            {currentExamQuestions.map((q, index) => {
              const userAnswer = answers[q.id];
              const correctAnswer = q. correctAnswer;
              let isCorrect = false;
              
              if (q.questionType === "Multi-select") {
                const sortedUser = Array.isArray(userAnswer) ? [...userAnswer].sort() : [];
                const sortedCorrect = Array.isArray(correctAnswer) ? [...correctAnswer].sort() : [];
                isCorrect = JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
              } else if (q.questionType === "Matching") {
                const userMatches = matchingAnswers[q.id] || {};
                const correctMatches = q. correctAnswer;
                isCorrect = JSON.stringify(userMatches) === JSON.stringify(correctMatches);
              } else {
                isCorrect = userAnswer === correctAnswer;
              }
              
              const isFlagged = markedForReview[q.id];
              
              return (
                <div key={q.id} className="question-card">
                  <div className="card-header">
                    <div className="card-left">
                      <span className={`flag-icon ${isFlagged ? 'flagged' :  ''}`}>🚩</span>
                      <span className={`status-icon ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ? '●' : '○'}
                      </span>
                      <span className="question-number-large">#{index + 1}</span>
                    </div>
                    <button className="edit-icon">✎</button>
                  </div>
                  
                  <div className="card-body">
                    <div className="card-category">{q.category}</div>
                    <div className="card-question">{q.question}</div>
                    <div className="card-meta">
                      <span>{q.id} - {q.questionType}</span>
                      <span className={`card-result ${isCorrect ? 'correct' : 'incorrect'}`}>
                        {isCorrect ?  '✓ Correct' : '✗ Incorrect'}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <button className="scroll-top-button">↑</button>
        </div>
      </div>
    );
  }

  const question = currentExamQuestions[currentQuestion];
  const selectedAnswer = answers[question.id];
  const isQuestionMarked = markedForReview[question.id];
  
  let isAnswerCorrect = false;
  if (question.questionType === "Multi-select") {
    const sortedUser = Array.isArray(selectedAnswer) ? [...selectedAnswer].sort() : [];
    const sortedCorrect = Array.isArray(question.correctAnswer) ? [...question.correctAnswer].sort() : [];
    isAnswerCorrect = selectedAnswer !== undefined && JSON.stringify(sortedUser) === JSON.stringify(sortedCorrect);
  } else if (question.questionType === "Matching") {
    const userMatches = matchingAnswers[question.id] || {};
    const correctMatches = question.correctAnswer;
    isAnswerCorrect = selectedAnswer !== undefined && JSON.stringify(userMatches) === JSON.stringify(correctMatches);
  } else {
    isAnswerCorrect = selectedAnswer !== undefined && selectedAnswer === question.correctAnswer;
  }
  
  const currentPercentage = calculateCurrentPercentage();

  return (
    <div className="exam-container">
      <header className="exam-header">
        <div className="header-left">
          <h1>CCNA Exam Practice</h1>
        </div>
        <div className="header-right">
          <div className="timer">
            <span className="timer-label">Time Remaining:</span>
            <span className={`timer-value ${timeRemaining < 300 ? 'warning' : ''}`}>
              {formatTime(timeRemaining)}
            </span>
          </div>
        </div>
      </header>

      <div className="exam-content">
        {/*<aside className="question-navigator">
          <h3>Questions</h3>
          <div className="question-grid">
            {currentExamQuestions.map((q, index) => (
              <button
                key={q.id}
                className={`question-number-btn ${
                  answers[q.id] !== undefined ?  'answered' : ''
                } ${currentQuestion === index ? 'active' : ''}`}
                onClick={() => handleQuestionJump(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="progress-info">
            <p>Answered: {Object.keys(answers).length} / {currentExamQuestions.length}</p>
          </div>
        </aside>*/}

        <main className="question-section">
          <div className={`question-header ${isQuestionMarked ? 'flagged' :  ''}`}>
            <span className={`question-counter ${isQuestionMarked ? 'flagged' : ''}`}>
              Question {currentQuestion + 1} of {currentExamQuestions.length}
              <span className="percentage-correct">{currentPercentage}% correct</span>
            </span>
            <button 
              className={`mark-review-button ${isQuestionMarked ? 'marked' : ''}`}
              onClick={handleToggleMarkForReview}
              title="Mark for Review"
            >
              🚩
            </button>
          </div>

          <div className="question-content">
            <h2 dangerouslySetInnerHTML={{ __html: question.question }} />
            
            {/* Regular Single-select or Multi-select questions */}
            {question.questionType !== "Matching" && (
              <div className="options-list">
                {question. options.map((option, index) => {
                  const isMultiSelect = question.questionType === "Multi-select";
                  const isSelected = isMultiSelect 
                    ? (selectedAnswer || []).includes(index)
                    : selectedAnswer === index;
                  
                  const correctAnswers = Array.isArray(question.correctAnswer) 
                    ? question.correctAnswer 
                    : [question.correctAnswer];
                  const isCorrectOption = correctAnswers.includes(index);
                  const shouldShowCorrect = showAnswer && isCorrectOption;
                  
                  return (
                    <div
                      key={index}
                      className={`option-item ${isSelected ? 'selected' :  ''} ${shouldShowCorrect ? 'correct-answer' : ''}`}
                      onClick={() => handleAnswerSelect(question. id, index)}
                    >
                      <input
                        type={isMultiSelect ? "checkbox" : "radio"}
                        id={`option-${index}`}
                        name={`question-${question.id}`}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(question.id, index)}
                      />
                      <label htmlFor={`option-${index}`}>
                        <span className="option-letter">
                          {String.fromCharCode(65 + index)}.
                        </span>
                        <span className="option-text" dangerouslySetInnerHTML={{ __html: option }}></span>
                      </label>
                    </div>
                  );
                })}
              </div>
            )}

            {/* Matching Question Interface */}
            {question.questionType === "Matching" && (
              <div className="matching-container">
                <p className="matching-instruction">
                  Click a term on the left, then click its matching definition on the right.
                </p>
                
                <div className="matching-pairs">
                  {question.matchingPairs.terms.map((term) => {
                    const currentMatches = matchingAnswers[question.id] || {};
                    const matchedDefId = currentMatches[term.id];
                    const matchedDef = question.matchingPairs.definitions. find(d => d.id === matchedDefId);
                    const isSelected = selectedTerm === term.id;
                    const isCorrectMatch = showAnswer && matchedDefId === question.correctAnswer[term.id];
                    const isIncorrectMatch = showAnswer && matchedDefId && matchedDefId !== question.correctAnswer[term.id];
                    
                    return (
                      <div key={term.id} className="matching-row">
                        <div 
                          className={`matching-term ${isSelected ? 'selected' : ''} ${isCorrectMatch ? 'correct' : ''} ${isIncorrectMatch ? 'incorrect' : ''}`}
                          onClick={() => handleMatchingSelect(question.id, term.id, null)}
                        >
                          {term.text}
                        </div>
                        
                        <div className="matching-connector">
                          {matchedDef && (
                            <div className={`matching-matched-def ${isCorrectMatch ? 'correct' : ''} ${isIncorrectMatch ? 'incorrect' : ''}`}>
                              {matchedDef. text}
                              <button 
                                className="clear-match-btn"
                                onClick={() => handleClearMatching(question.id, term.id)}
                                title="Clear this match"
                              >
                                ×
                              </button>
                            </div>
                          )}
                          {! matchedDef && <div className="matching-empty">Click to match →</div>}
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="matching-definitions-label">
                  <h4>Available Definitions:</h4>
                </div>
                
                <div className="matching-definitions">
                  {question.matchingPairs.definitions.map((def) => {
                    const currentMatches = matchingAnswers[question.id] || {};
                    const isMatched = Object.values(currentMatches).includes(def.id);
                    const isClickable = selectedTerm !== null && ! isMatched;
                    const isCorrectDef = showAnswer && def.id === question.correctAnswer[selectedTerm];
                    
                    return (
                      <div
                        key={def.id}
                        className={`matching-definition ${isMatched ? 'matched' : ''} ${isClickable ? 'clickable' : ''} ${isCorrectDef ? 'correct-hint' : ''}`}
                        onClick={() => !isMatched && handleMatchingSelect(question.id, null, def.id)}
                      >
                        {def.text}
                      </div>
                    );
                  })}
                </div>

                {showAnswer && (
                  <div className="matching-correct-answers">
                    <h4>Correct Matches:</h4>
                    {question.matchingPairs.terms.map((term) => {
                      const correctDefId = question.correctAnswer[term.id];
                      const correctDef = question.matchingPairs.definitions.find(d => d.id === correctDefId);
                      return (
                        <div key={term.id} className="correct-match-display">
                          <strong>{term.text}</strong> → {correctDef.text}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            )}

            {showAnswer && selectedAnswer !== undefined && question.questionType !== "Matching" && (
              <div className="answer-explanation">
                <div className={`answer-status ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
                  {isAnswerCorrect ? 'Correct' : 'Incorrect'}
                </div>
                <div className="correct-answer-info">
                  <strong>Correct Answer(s):</strong> {
                    Array.isArray(question.correctAnswer)
                      ? question.correctAnswer.map(idx => String.fromCharCode(65 + idx)).join(', ')
                      : String.fromCharCode(65 + question.correctAnswer)
                  }
                </div>
                <div className="explanation-section">
                  <h3>Explanation</h3>
                  <div dangerouslySetInnerHTML={{ __html: question.explanation }} />
                </div>
                <div className="reference-section">
                  <h3>Reference</h3>
                  {question.reference. map((ref, index) => (
                    <div key={index} className="reference-item">
                      <p><strong>{ref.title}</strong></p>
                      <p>{ref.description}</p>
                      {ref.link && (
                        <a href={ref.link} target="_blank" rel="noopener noreferrer">
                          {ref.link}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <div className="category-section">
                  <strong>Category:</strong> {question. category}
                </div>
              </div>
            )}

            {showAnswer && question.questionType === "Matching" && (
              <div className="answer-explanation">
                <div className={`answer-status ${isAnswerCorrect ? 'correct' :  'incorrect'}`}>
                  {isAnswerCorrect ?  'Correct' : 'Incorrect'}
                </div>
                <div className="explanation-section">
                  <h3>Explanation</h3>
                  <div dangerouslySetInnerHTML={{ __html: question.explanation }} />
                </div>
                <div className="reference-section">
                  <h3>Reference</h3>
                  {question.reference.map((ref, index) => (
                    <div key={index} className="reference-item">
                      <p><strong>{ref.title}</strong></p>
                      <p>{ref. description}</p>
                      {ref.link && (
                        <a href={ref.link} target="_blank" rel="noopener noreferrer">
                          {ref.link}
                        </a>
                      )}
                    </div>
                  ))}
                </div>
                <div className="category-section">
                  <strong>Category:</strong> {question.category}
                </div>
              </div>
            )}
          </div>

          <div className="navigation-buttons">
            <div className="nav-left">
              <button
                className="nav-button prev"
                onClick={handlePreviousQuestion}
                disabled={currentQuestion === 0}
              >
                ← Previous
              </button>
              
              <button
                className="nav-button next"
                onClick={handleNextQuestion}
                disabled={currentQuestion === currentExamQuestions.length - 1}
              >
                Next →
              </button>
            </div>

            <div className="nav-right">
              <button
                className="show-answer-button"
                onClick={handleToggleShowAnswer}
              >
                {showAnswer ? 'Hide Answer' : 'Show Answer'}
              </button>
              
              <button
                className="grade-button"
                onClick={handleOpenGradeModal}
              >
                Grade Exam
              </button>
            </div>
          </div>
        </main>
      </div>

      {/* Grade Exam Modal */}
      {showGradeModal && (
        <div className="modal-overlay" onClick={handleCloseGradeModal}>
          <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={handleCloseGradeModal}>×</button>
            <h2>End and grade the exam? </h2>
            <div className="modal-actions">
              <button className="modal-grade-button" onClick={handleConfirmGrade}>
                Grade Exam
              </button>
              <button className="modal-cancel-button" onClick={handleCloseGradeModal}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;