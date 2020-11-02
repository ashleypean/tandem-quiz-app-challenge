import '../styles/Quiz.css'
import QuizContent from './QuizContent.js'
import Modal from './Modal.js'
import FinalScore from './FinalScore.js'
import React, { useState, Component } from 'react'
require('react-dom');
window.React2 = require('react');
console.log(window.React1 === window.React2)

export default function Quiz(props) {
  const [currentQuestion, setCurrentQuestion] = useState({
    "question": null,
    "incorrect": [],
    "correct": null
  })
  return (
    <div className="quiz">
      <nav>
      <p className="link modal">Instructions</p>
      <p className="exit-button link">Exit Quiz</p>
      </nav>

      <div className="score">
        <h1 className="score">Score: 7</h1>
      </div>

      <Modal className="modal"/>

      <div className="quiz-details">
        <p className="round">Round 1/1</p>
        <p className="questions">Question 9/10</p>
      </div>
        {/* fetched from server*/}
        <QuizContent />
        <p className="next-question">Next &gt;</p>
        <FinalScore className="final-score"/>
    </div>
  )
}
