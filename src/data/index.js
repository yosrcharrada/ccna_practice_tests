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
  
  // Shuffle and return specified number of questions
  const shuffled = allQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, numberOfQuestions);
};
