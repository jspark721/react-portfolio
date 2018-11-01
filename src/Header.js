import React, { Component } from 'react';
import Background from './img/hero.jpg';
import './styles/header.scss';

const background = {
  backgroundImage: `url( ${Background})`,
};

class Header extends Component {
  render() {
    return(
      <header style={background}>
        <h1>{this.props.title}</h1>
        <p>developer & designer</p>
        <p class="location"> seattle, washington</p>
        <p class="button"><a href="/">{this.props.button}</a></p>
      </header>
    );
  }
};

export default Header;
