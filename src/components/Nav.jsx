import React from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/nav.css'

export default function Nav() {
  return (
    <nav>
      <NavLink to="/" activeClassName="selected-nav-item" >
        Home
      </NavLink>

      <NavLink to="/instructions" activeClassName="selected-nav-item" >
        Instructions
      </NavLink>

      <NavLink to="/take" activeClassName="selected-nav-item" >
        Take a Quiz
      </NavLink>
    </nav>
  )
}
