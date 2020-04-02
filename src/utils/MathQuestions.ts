const questions: object[] = [
  {
    question: 'What Is 2 + 2',
    answers: [
      { text: '4', correct: true },
      { text: '8', correct: false },
      { text: '20', correct: false },
      { text: '2', correct: false }
    ]
  },
  {
    question: 'What Is 3 + 9',
    answers: [
      { text: '12', correct: true },
      { text: '21', correct: false },
      { text: '8', correct: false },
      { text: '30', correct: false }
    ]
  },
  {
    question: 'What Is 2 + 10',
    answers: [
      { text: '12', correct: true },
      { text: '6', correct: false },
      { text: '8', correct: false },
      { text: '20', correct: false }
    ]
  },
  {
    question: 'What Is 8 + 2',
    answers: [
      { text: '10', correct: true },
      { text: '9', correct: false },
      { text: '15', correct: false },
      { text: '20', correct: false }
    ]
  },
  {
    question: 'What Is 1 + 5',
    answers: [
      { text: '6', correct: true },
      { text: '12', correct: false },
      { text: '9', correct: false },
      { text: '2', correct: false }
    ]
  }
];

export const shuffledQuestion = questions.sort(() => Math.random() - 0.5);
