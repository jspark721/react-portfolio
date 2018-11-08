import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';


import '../styles/navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <h2 className="logo">{this.props.logo}</h2>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/work">Work</NavLink></li>
          <li><NavLink className="nav-special" to="/contact">Contact</NavLink></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
