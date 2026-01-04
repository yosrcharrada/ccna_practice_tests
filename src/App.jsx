import { useState, useEffect, useCallback } from 'react';
import './App.css';

// Constants
const EXAM_DURATION_SECONDS = 1800; // 30 minutes
const PASSING_SCORE_PERCENTAGE = 70;

// Sample CCNA exam questions
const examQuestions = [
  {
    id: 1363,
    question: "What is the default administrative distance for OSPF?",
    options: ["90", "100", "110", "120"],
    correctAnswer: 2,
    category: "Network Fundamentals",
    questionType: "Single-select",
    explanation: "OSPF (Open Shortest Path First) has an administrative distance of 110. Administrative distance is a measure of the trustworthiness of a routing information source. Lower values are preferred. OSPF's AD of 110 makes it more trusted than RIP (120) but less trusted than EIGRP (90) and directly connected routes (0).",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 1",
        description: "Chapter 18: Configuring IPv4 Routing Protocols",
        link: null
      },
      {
        title: "Cisco Documentation",
        description: "Administrative Distance",
        link: "https://www.cisco.com/c/en/us/support/docs/ip/border-gateway-protocol-bgp/15986-admin-distance.html"
      }
    ]
  },
  {
    id: 1405,
    question: "Which command is used to configure a router interface with an IP address?",
    options: [
      "ip address [address] [subnet mask]",
      "set ip [address] [subnet mask]",
      "interface ip [address] [subnet mask]",
      "config ip [address] [subnet mask]"
    ],
    correctAnswer: 0,
    category: "IP Connectivity",
    questionType: "Single-select",
    explanation: "The command 'ip address [address] [subnet mask]' is used in interface configuration mode to assign an IP address to a router interface. You must first enter the interface configuration mode using 'interface [type] [number]', then use this command. For example: 'ip address 192.168.1.1 255.255.255.0'.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 1",
        description: "Chapter 16: Configuring IPv4 Addresses and Static Routes",
        link: null
      }
    ]
  },
  {
    id: 1447,
    question: "What type of cable is used to connect two switches directly?",
    options: ["Straight-through cable", "Crossover cable", "Rollover cable", "Serial cable"],
    correctAnswer: 1,
    category: "Network Fundamentals",
    questionType: "Single-select",
    explanation: "A crossover cable is traditionally used to connect similar devices like switch to switch or router to router. In a crossover cable, the transmit pins on one end connect to the receive pins on the other end. However, modern switches often support Auto-MDIX (Automatic Medium-Dependent Interface Crossover), which allows the use of straight-through cables as well.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 1",
        description: "Chapter 2: Fundamentals of Ethernet LANs",
        link: null
      }
    ]
  },
  {
    id: 1489,
    question: "Which layer of the OSI model is responsible for logical addressing?",
    options: ["Layer 2 - Data Link", "Layer 3 - Network", "Layer 4 - Transport", "Layer 5 - Session"],
    correctAnswer: 1,
    category: "Network Fundamentals",
    questionType: "Single-select",
    explanation: "The Network layer (Layer 3) handles logical addressing using IP addresses. This layer is responsible for packet forwarding, routing, and providing logical addressing that allows communication between different networks. Layer 2 handles physical addressing (MAC addresses), while Layer 4 handles port numbers for application identification.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 1",
        description: "Chapter 1: Introduction to TCP/IP Networking",
        link: null
      }
    ]
  },
  {
    id: 1521,
    question: "What is the purpose of VLAN?",
    options: [
      "To increase network speed",
      "To segment broadcast domains",
      "To provide wireless connectivity",
      "To encrypt network traffic"
    ],
    correctAnswer: 1,
    category: "Network Access",
    questionType: "Single-select",
    explanation: "VLANs (Virtual Local Area Networks) are used to segment broadcast domains and improve network organization and security. By creating VLANs, you can logically group devices regardless of their physical location, reduce broadcast traffic, improve security by isolating sensitive traffic, and make network management more flexible.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 1",
        description: "Chapter 11: Implementing Ethernet Virtual LANs",
        link: null
      }
    ]
  },
  {
    id: 1563,
    question: "Which routing protocol uses bandwidth and delay as default metrics?",
    options: ["RIP", "OSPF", "EIGRP", "BGP"],
    correctAnswer: 2,
    category: "IP Connectivity",
    questionType: "Single-select",
    explanation: "EIGRP (Enhanced Interior Gateway Routing Protocol) uses bandwidth and delay as its default metrics for route selection. EIGRP calculates a composite metric based on these values, though it can also consider reliability, load, and MTU. RIP uses hop count, OSPF uses cost (based on bandwidth), and BGP uses path attributes.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 2",
        description: "Chapter 8: Implementing EIGRP",
        link: null
      }
    ]
  },
  {
    id: 1605,
    question: "What is the maximum number of usable host addresses in a /26 network?",
    options: ["30", "62", "126", "254"],
    correctAnswer: 1,
    category: "IP Services",
    questionType: "Single-select",
    explanation: "A /26 network has 64 total addresses (2^6 = 64), minus 2 (network address and broadcast address) = 62 usable host addresses. The /26 notation indicates that 26 bits are used for the network portion, leaving 6 bits for hosts. Network address is the first address, broadcast is the last, and the addresses in between are usable for hosts.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 1",
        description: "Chapter 13: Analyzing Subnet Masks",
        link: null
      }
    ]
  },
  {
    id: 1647,
    question: "Which command displays the routing table on a Cisco router?",
    options: ["show routes", "show ip route", "display routing-table", "show routing"],
    correctAnswer: 1,
    category: "IP Connectivity",
    questionType: "Single-select",
    explanation: "The command 'show ip route' displays the IP routing table on Cisco routers. This command shows all known routes including directly connected networks, static routes, and dynamically learned routes from routing protocols. The output includes the route source, destination network, administrative distance, metric, next-hop address, and outgoing interface.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 1",
        description: "Chapter 16: Configuring IPv4 Addresses and Static Routes",
        link: null
      }
    ]
  },
  {
    id: 1689,
    question: "What does NAT stand for?",
    options: [
      "Network Address Translation",
      "Network Access Technology",
      "Node Address Transfer",
      "Network Authentication Token"
    ],
    correctAnswer: 0,
    category: "IP Services",
    questionType: "Single-select",
    explanation: "NAT stands for Network Address Translation, used to translate private IP addresses to public ones. NAT is commonly used to allow multiple devices on a private network to share a single public IP address for Internet access. It also provides a layer of security by hiding internal IP addresses from the external network.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 2",
        description: "Chapter 10: Network Address Translation",
        link: null
      }
    ]
  },
  {
    id: 1731,
    question: "Which protocol operates at the Transport layer and provides reliable, connection-oriented service?",
    options: ["UDP", "TCP", "IP", "ICMP"],
    correctAnswer: 1,
    category: "Network Fundamentals",
    questionType: "Single-select",
    explanation: "TCP (Transmission Control Protocol) provides reliable, connection-oriented service at the Transport layer. TCP ensures reliable delivery through acknowledgments, retransmissions, flow control, and sequencing. It establishes a connection using a three-way handshake before data transfer and guarantees that data arrives in order and without errors. UDP, in contrast, is connectionless and unreliable but faster.",
    reference: [
      {
        title: "CCNA 200-301 Official Cert Guide, Volume 1",
        description: "Chapter 6: TCP/IP Transport Layer",
        link: null
      }
    ]
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [examStarted, setExamStarted] = useState(false);
  const [examSubmitted, setExamSubmitted] = useState(false);
  const [timeRemaining, setTimeRemaining] = useState(EXAM_DURATION_SECONDS);
  const [markedForReview, setMarkedForReview] = useState({});
  const [showAnswer, setShowAnswer] = useState(false);
  const [showGradeModal, setShowGradeModal] = useState(false);
  const [currentView, setCurrentView] = useState('exam'); // 'exam', 'results', 'review'

  const handleSubmitExam = useCallback(() => {
    setExamSubmitted(true);
    setCurrentView('results');
  }, []);

  const handleToggleMarkForReview = () => {
    const questionId = examQuestions[currentQuestion].id;
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
      const question = examQuestions.find(q => q.id === parseInt(questionId));
      if (question && answers[questionId] === question.correctAnswer) {
        correct++;
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
    setAnswers({ ...answers, [questionId]: answerIndex });
  };

  const handleNextQuestion = () => {
    if (currentQuestion < examQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowAnswer(false);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowAnswer(false);
    }
  };

  const handleQuestionJump = (index) => {
    setCurrentQuestion(index);
    setShowAnswer(false);
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setAnswers({});
    setCurrentQuestion(0);
    setExamSubmitted(false);
    setTimeRemaining(EXAM_DURATION_SECONDS);
    setMarkedForReview({});
    setShowAnswer(false);
    setCurrentView('exam');
  };

  const calculateScore = () => {
    let correct = 0;
    examQuestions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    const percentage = ((correct / examQuestions.length) * 100).toFixed(1);
    const points = Math.round((correct / examQuestions.length) * 1000);
    return {
      correct,
      total: examQuestions.length,
      percentage,
      points
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
            <p><strong>Passing Score:</strong> {PASSING_SCORE_PERCENTAGE}%</p>
          </div>
          <button className="start-button" onClick={handleStartExam}>
            Start Exam
          </button>
        </div>
      </div>
    );
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
              <p>Exam Bank: Exam A</p>
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
                  style={{ width: `${(score.points / 1000) * 100}%` }}
                ></div>
                <div className="passing-marker" style={{ left: '82.5%' }}></div>
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
            {examQuestions.map((q, index) => {
              const userAnswer = answers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;
              const isFlagged = markedForReview[q.id];
              
              return (
                <div key={q.id} className="question-card">
                  <div className="card-header">
                    <div className="card-left">
                      <span className={`flag-icon ${isFlagged ? 'flagged' : ''}`}>🚩</span>
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
                        {isCorrect ? '✓ Correct' : '✗ Incorrect'}
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

  const question = examQuestions[currentQuestion];
  const selectedAnswer = answers[question.id];
  const isQuestionMarked = markedForReview[question.id];
  const isAnswerCorrect = selectedAnswer !== undefined && selectedAnswer === question.correctAnswer;
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
            <h2>{question.question}</h2>
            
            <div className="options-list">
              {question.options.map((option, index) => {
                const isSelected = selectedAnswer === index;
                const isCorrectOption = index === question.correctAnswer;
                const shouldShowCorrect = showAnswer && isCorrectOption;
                
                return (
                  <div
                    key={index}
                    className={`option-item ${isSelected ? 'selected' : ''} ${shouldShowCorrect ? 'correct-answer' : ''}`}
                    onClick={() => handleAnswerSelect(question.id, index)}
                  >
                    <input
                      type="radio"
                      id={`option-${index}`}
                      name={`question-${question.id}`}
                      checked={isSelected}
                      onChange={() => handleAnswerSelect(question.id, index)}
                    />
                    <label htmlFor={`option-${index}`}>
                      <span className="option-letter">
                        {String.fromCharCode(65 + index)}.
                      </span>
                      <span className="option-text">{option}</span>
                    </label>
                  </div>
                );
              })}
            </div>

            {showAnswer && selectedAnswer !== undefined && (
              <div className="answer-explanation">
                <div className={`answer-status ${isAnswerCorrect ? 'correct' : 'incorrect'}`}>
                  {isAnswerCorrect ? 'Correct' : 'Incorrect'}
                </div>
                <div className="correct-answer-info">
                  <strong>Correct Answer(s):</strong> {String.fromCharCode(65 + question.correctAnswer)}
                </div>
                <div className="explanation-section">
                  <h3>Explanation</h3>
                  <p>{question.explanation}</p>
                </div>
                <div className="reference-section">
                  <h3>Reference</h3>
                  {question.reference.map((ref, index) => (
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
                disabled={currentQuestion === examQuestions.length - 1}
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
            <h2>End and grade the exam?</h2>
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

