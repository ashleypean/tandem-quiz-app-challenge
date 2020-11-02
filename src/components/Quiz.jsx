import '../styles/quiz.css'
//import QuizContent from './QuizContent'
// import Modal from './Modal'
import FinalScore from './FinalScore'
import React, { useState, Component } from 'react'

export default function Quiz(props) {
  // const [currentQuestion, setCurrentQuestion] = useState({
  //   "question": null,
  //   "incorrect": [],
  //   "correct": null
  // })
  return (
    <div className="quiz">
      <nav>
      <p className="link modal">Instructions</p>
      <p className="exit-button link">Exit Quiz</p>
      </nav>

      <div className="score">
        <h1 className="score">Score: 7</h1>
      </div>

      {/*<Modal className="modal"/>*/}

      <div className="quiz-details">
        <p className="round">Round 1/1</p>
        <p className="questions">Question 9/10</p>
      </div>
        {/* fetched from server
        <QuizContent />
        <p className="next-question">Next &gt;</p>
        <FinalScore className="final-score"/>*/}
    </div>
  )
}
