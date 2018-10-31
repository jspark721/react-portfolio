import React, { Component } from 'react';
import './styles/navigation.scss';

class Navigation extends Component {
  render() {
    const sections = ['Home', 'About', 'Work', 'Contact'];
    const navLinks = sections.map( (section, i) => {
      return (
        <li key={i}><a href="{'#' + section }">{section}</a></li>
      )
    });
    return (
      <nav>
        <h2 className="logo">{this.props.logo}</h2>
        <ul>
          {navLinks}
        </ul>
      </nav>
    );
  }
}

export default Navigation;
