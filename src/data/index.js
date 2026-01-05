// Central export file for all exam banks
import { examAQuestions } from './examA';
import { examBQuestions } from './examB';
import { examCQuestions } from './examC';
import { examDQuestions } from './examD';
import { customExamQuestions } from './customExam';

export const examBanks = {
  'examA': examAQuestions,
  'examB': examBQuestions,
  'examC': examCQuestions,
  'examD': examDQuestions,
  'custom': customExamQuestions,
};

// Function to get random questions from all exam banks
export const getRandomExam = (numberOfQuestions = 10) => {
  const allQuestions = [
    ...examAQuestions,
    ...examBQuestions,
    ...examCQuestions,
    ...examDQuestions,
    ...customExamQuestions
  ];
  
  // Return empty array if no questions available
  if (allQuestions.length === 0) {
    return [];
  }
  
  // Fisher-Yates shuffle algorithm for proper randomization
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  
  // Return up to numberOfQuestions, but not more than available
  return shuffled.slice(0, Math.min(numberOfQuestions, shuffled.length));
};
