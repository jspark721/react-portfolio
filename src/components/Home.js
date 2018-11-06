import React, { Component } from 'react';

import Background from '../img/hero.jpg';
import '../styles/header.scss';

const background = {
  backgroundImage: `url( ${Background})`,
};

class Home extends Component {
  render() {
    return(
      <div>
        <header style={background}>
          <h1>Julie Park</h1>
          <p>developer & designer</p>
          <p className="location"> seattle, washington</p>
          <p className="button"><a href="/about" className="main-btn">Learn More</a></p>
        </header>
      </div>
    );
  }
};

export default Home;
