import '../styles/App.css';
import Home from './Home.js'
import Instructions from './Instructions.js'
import NotFound from './404NotFound.js'
import Quiz from './QuizWrapper.js'
import { BrowserRouter as Router, Switch , Route, Redirect } from 'react-router-dom'

export default function App() {

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" render={Home} />
          <Route exact path="/instructions" render={Instructions} />
          <Route exact path="/quiz" render={Quiz} />
          <Route path="/404" render={NotFound} />
          <Redirect to="/404"/>
        </Switch>  
      </Router>

    </div>
  )
}


