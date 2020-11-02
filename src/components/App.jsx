import '../styles/App.css';
import Home from './Home'
import Instructions from './Instructions'
import NotFound from './404NotFound'
import Quiz from './Quiz'
import FinalScore from './FinalScore'
import { BrowserRouter as Router, Switch , Route, Redirect } from 'react-router-dom'
import { useState } from 'react'

export default function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [questionNumber, setQuestionNumber] = useState(1)

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route  exact path="/" render={Home} />
          <Redirect from="/home" to="/"/>
          <Route  exact path="/instructions" render={Instructions} />
          <Route exact path="/score" render={FinalScore} />
          <Route exact path="/quiz" render={Quiz}
          isOpen={isOpen} setIsOpen={setIsOpen}
          questionNumber={questionNumber}
          setQuestionNumber={setQuestionNumber}
          />
          <Route path="/quiz/score" render={FinalScore} />
          <Route path="*" render={NotFound}/>
        </Switch>  
      </Router>

    </div>
  )
}