import React, { useState } from 'react'
import QuestionCard from './QuestionCard';
import './MainScreen.css'
const MainScreen = () => {
  // const [elements,setElement] = useState([]);
  const elements = [];
  const jsonData = [
    {
      "questionId": 1,
      "questionText": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "answer": "Paris",
      "difficulty": "Easy",
      "category": "Geography",
      "explanation": "Paris is the capital of France."
    },
    {
      "questionId": 2,
      "questionText": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "answer": "Paris",
      "difficulty": "Easy",
      "category": "Geography",
      "explanation": "Paris is the capital of France."
    },
    {
      "questionId": 3,
      "questionText": "What is the capital of France?",
      "options": ["Berlin", "Madrid", "Paris", "Rome"],
      "answer": "Paris",
      "difficulty": "Easy",
      "category": "Geography",
      "explanation": "Paris is the capital of France."
    }

  ]
  for (let i = 0; i < jsonData.length; i++) {
    const question = jsonData[i];
    elements.push(
      <QuestionCard
        questionNumber={question.questionId}
        question={question.questionText}
        answer={question.answer}
        explanation={question.explanation}
        option1={question.options[0]}
        option2={question.options[1]}
        option3={question.options[2]}
        option4={question.options[3]}
      />
    )
  }
  return (
    <div className='questionsCard'>
      {elements}
    </div>
  );
}

export default MainScreen