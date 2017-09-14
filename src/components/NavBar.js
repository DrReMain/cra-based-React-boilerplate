import React from 'react'

import { Link } from 'react-router'

import './NavBar.css'

export default class NavBar extends React.Component {
  render() {
    return (
      <nav className="navbar">
        <ul>
          <li><Link activeClassName="active" to="/">Home</Link></li>
          <li><Link activeClassName="active" to="/counter">Counter</Link></li>
          <li><Link activeClassName="active" to="/fetch">Fetch</Link></li>
          <li><Link activeClassName="active" to="/404">404</Link></li>
        </ul>
      </nav>
    )
  }
}