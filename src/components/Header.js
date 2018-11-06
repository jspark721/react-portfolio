import React, { Component } from 'react';
import Background from './img/hero.jpg';
import './styles/header.scss';

// const background = {
//   backgroundImage: `url( ${Background})`,
// };

class Header extends Component {
  render() {
    return(
      // <header style={background}>
      <header>
        <h1>{this.props.title}</h1>
        <p>developer & designer</p>
        <p className="location"> seattle, washington</p>
        <p className="button"><a href="#button" className="main-btn">{this.props.button}</a></p>
      </header>
    );
  }
};

export default Header;
