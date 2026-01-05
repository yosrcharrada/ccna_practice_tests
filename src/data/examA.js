// Exam A Questions - CCNA 200-301
// Add your questions here following the template below

export const examAQuestions = [
  {
    id: 1363, // Your question ID from your files
    category: "Network Fundamentals",
    questionType: "Single-select",
    question: "Which of the following relies on a three-way handshake in order to provide connection-oriented, reliable data transfer between networked computers?",
    options: [
      "ARP",
      "DNS",
      "TCP",
      "RARP",
      "UDP"
    ],
    correctAnswer: 2, // Index of correct answer (0-based)
    explanation: "TCP (Transmission Control Protocol) uses a three-way handshake to establish a reliable connection. The three-way handshake involves SYN, SYN-ACK, and ACK packets.",
    reference: [
      {
        title: "Boson CCNA Curriculum 200-301",
        description: "Module 2: Network Addressing and Transport, TCP Protocol"
      },
      {
        title: "CCNA 200-301 Official Cert Guide",
        description: "2nd Edition, Volume 1, Chapter 6: TCP/IP Transport and Applications"
      }
    ]
  },
  // TODO: Add more questions here manually
  // Copy the object structure above and fill in your question data
];
