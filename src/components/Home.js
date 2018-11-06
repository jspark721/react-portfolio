import React, { Component } from 'react';

import Background from '../img/hero.jpg';
import '../styles/home.scss';

class Home extends Component {
  render() {
    return(
      <div>
        <header>
          <h1>Julie Park</h1>
          <p>developer & designer</p>
          <div className="header-info">
            <p className="location"> seattle, washington</p>
            <p className="button"><a href="/about" className="main-btn">Learn More</a></p>
          </div>
        </header>
      </div>
    );
  }
};

export default Home;

// <section className="main">
//   <h2>I'm a software developer, specializing in full-stack web development with a passion for simple, elegant, & functional design.</h2>
// </section>
