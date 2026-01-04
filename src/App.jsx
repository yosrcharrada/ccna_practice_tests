import { useState, useEffect } from 'react';
import './App.css';

// Sample CCNA exam questions
const examQuestions = [
  {
    id: 1,
    question: "What is the default administrative distance for OSPF?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 2,
    explanation: "OSPF has an administrative distance of 110."
  },
  {
    id: 2,
    question: "Which command is used to configure a router interface with an IP address?",
    options: [
      "ip address [address] [subnet mask]",
      "set ip [address] [subnet mask]",
      "interface ip [address] [subnet mask]",
      "config ip [address] [subnet mask]"
    ],
    correctAnswer: 0,
    explanation: "The command 'ip address [address] [subnet mask]' is used in interface configuration mode."
  },
  {
    id: 3,
    question: "What type of cable is used to connect two switches directly?",
    options: ["Straight-through cable", "Crossover cable", "Rollover cable", "Serial cable"],
    correctAnswer: 1,
    explanation: "A crossover cable is used to connect similar devices like switch to switch or router to router."
  },
  {
    id: 4,
    question: "Which layer of the OSI model is responsible for logical addressing?",
    options: ["Layer 2 - Data Link", "Layer 3 - Network", "Layer 4 - Transport", "Layer 5 - Session"],
    correctAnswer: 1,
    explanation: "The Network layer (Layer 3) handles logical addressing using IP addresses."
  },
  {
    id: 5,
    question: "What is the purpose of VLAN?",
    options: [
      "To increase network speed",
      "To segment broadcast domains",
      "To provide wireless connectivity",
      "To encrypt network traffic"
    ],
    correctAnswer: 1,
    explanation: "VLANs are used to segment broadcast domains and improve network organization and security."
  },
  {
    id: 6,
    question: "Which routing protocol uses bandwidth and delay as default metrics?",
    options: ["RIP", "OSPF", "EIGRP", "BGP"],
    correctAnswer: 2,
    explanation: "EIGRP uses bandwidth and delay as its default metrics for route selection."
  },
  {
    id: 7,
    question: "What is the maximum number of usable host addresses in a /26 network?",
    options: ["30", "62", "126", "254"],
    correctAnswer: 1,
    explanation: "A /26 network has 64 total addresses, minus 2 (network and broadcast) = 62 usable hosts."
  },
  {
    id: 8,
    question: "Which command displays the routing table on a Cisco router?",
    options: ["show routes", "show ip route", "display routing-table", "show routing"],
    correctAnswer: 1,
    explanation: "The command 'show ip route' displays the IP routing table on Cisco routers."
  },
  {
    id: 9,
    question: "What does NAT stand for?",
    options: [
      "Network Address Translation",
      "Network Access Technology",
      "Node Address Transfer",
      "Network Authentication Token"
    ],
    correctAnswer: 0,
    explanation: "NAT stands for Network Address Translation, used to translate private IP addresses to public ones."
  },
  {
    id: 10,
    question: "Which protocol operates at the Transport layer and provides reliable, connection-oriented service?",
    options: ["UDP", "TCP", "IP", "ICMP"],
    correctAnswer: 1,
    explanation: "TCP (Transmission Control Protocol) provides reliable, connection-oriented service at the Transport layer."
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(1800); // 30 minutes

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
  }, [examStarted, examSubmitted, timeRemaining]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleAnswerSelect = (questionId, answerIndex) => {
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleQuestionJump = (index) => {
    setCurrentQuestion(index);
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setAnswers({});
    setCurrentQuestion(0);
    setExamSubmitted(false);
    setTimeRemaining(1800);
  };

  const handleSubmitExam = () => {
    setExamSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return {
      correct,
      total: examQuestions.length,
      percentage: ((correct / examQuestions.length) * 100).toFixed(1)
    };
  };

  if (!examStarted) {
    return (
      <div className="start-screen">
        <div className="start-container">
          <h1>CCNA Exam Practice</h1>
          <div className="exam-info">
            <p><strong>Number of Questions:</strong> {examQuestions.length}</p>
            <p><strong>Time Limit:</strong> 30 minutes</p>
            <p><strong>Passing Score:</strong> 70%</p>
          </div>
          <button className="start-button" onClick={handleStartExam}>
            Start Exam
          </button>
        </div>
      </div>
    );
  }

  if (examSubmitted) {
    const score = calculateScore();
    const passed = score.percentage >= 70;

    return (
      <div className="results-screen">
        <div className="results-container">
          <h1>Exam Results</h1>
          <div className={`score-display ${passed ? 'passed' : 'failed'}`}>
            <div className="score-percentage">{score.percentage}%</div>
            <div className="score-details">
              {score.correct} out of {score.total} correct
            </div>
            <div className="pass-status">
              {passed ? '✓ PASSED' : '✗ FAILED'}
            </div>
          </div>
          
          <div className="answer-review">
            <h2>Review Your Answers</h2>
            {examQuestions.map((q, index) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              
              return (
                <div key={q.id} className={`review-item ${isCorrect ? 'correct' : 'incorrect'}`}>
                  <div className="review-header">
                    <span className="question-number">Question {index + 1}</span>
                    <span className={`result-badge ${isCorrect ? 'correct' : 'incorrect'}`}>
                      {isCorrect ? '✓ Correct' : '✗ Incorrect'}
                    </span>
                  </div>
                  <p className="review-question">{q.question}</p>
                  <div className="review-answers">
                    <p><strong>Your answer:</strong> {userAnswer !== undefined ? q.options[userAnswer] : 'Not answered'}</p>
                    {!isCorrect && (
                      <p><strong>Correct answer:</strong> {q.options[q.correctAnswer]}</p>
                    )}
                    <p className="explanation"><strong>Explanation:</strong> {q.explanation}</p>
                  </div>
                </div>
              );
            })}
          </div>
          
          <button className="restart-button" onClick={handleStartExam}>
            Take Exam Again
          </button>
        </div>
      </div>
    );
  }

  const question = examQuestions[currentQuestion];
  const selectedAnswer = answers[question.id];

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
        <aside className="question-navigator">
          <h3>Questions</h3>
          <div className="question-grid">
            {examQuestions.map((q, index) => (
              <button
                key={q.id}
                className={`question-number-btn ${
                  answers[q.id] !== undefined ? 'answered' : ''
                } ${currentQuestion === index ? 'active' : ''}`}
                onClick={() => handleQuestionJump(index)}
              >
                {index + 1}
              </button>
            ))}
          </div>
          <div className="progress-info">
            <p>Answered: {Object.keys(answers).length} / {examQuestions.length}</p>
          </div>
        </aside>

        <main className="question-section">
          <div className="question-header">
            <span className="question-counter">
              Question {currentQuestion + 1} of {examQuestions.length}
            </span>
          </div>

          <div className="question-content">
            <h2>{question.question}</h2>
            
            <div className="options-list">
              {question.options.map((option, index) => (
                <div
                  key={index}
                  className={`option-item ${selectedAnswer === index ? 'selected' : ''}`}
                  onClick={() => handleAnswerSelect(question.id, index)}
                >
                  <input
                    type="radio"
                    id={`option-${index}`}
                    name={`question-${question.id}`}
                    checked={selectedAnswer === index}
                    onChange={() => handleAnswerSelect(question.id, index)}
                  />
                  <label htmlFor={`option-${index}`}>
                    <span className="option-letter">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="option-text">{option}</span>
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="navigation-buttons">
            <button
              className="nav-button prev"
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>
            
            <button
              className="submit-button"
              onClick={handleSubmitExam}
            >
              Submit Exam
            </button>

            <button
              className="nav-button next"
              onClick={handleNextQuestion}
              disabled={currentQuestion === examQuestions.length - 1}
            >
              Next →
            </button>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;

