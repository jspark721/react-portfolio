import React, { Component } from 'react';
import '../styles/navigation.scss';

class Navigation extends Component {
  render() {
    return (
      <nav>
        <h2 className="logo">JP</h2>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/">About</a></li>
          <li><a href="/">Work</a></li>
          <li><a href="/">Contact</a></li>
        </ul>
      </nav>
    );
  }
}

export default Navigation;
