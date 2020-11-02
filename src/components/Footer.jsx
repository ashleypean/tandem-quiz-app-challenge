import React from 'react'
import { Link, BrowserRouter as Router } from 'react-router-dom'
import "../styles/footer.css"

export default function Footer() {
  return (
    <footer>
      <p>
      Coded with ❤️ &nbsp;by&nbsp;
      <Router>
        <Link to="https://github.com/ashleypean">
          Ashley Pean
        </Link>
      </Router>
      </p>
    </footer>
  )
}
