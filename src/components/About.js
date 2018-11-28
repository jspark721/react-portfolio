import React from 'react';
import Navbar from './Navbar';
import '../styles/section.scss';

const About = () => {
  return (
    <div>
      <Navbar logo="JP"/>
      <div className="container">
        <div className="title">
          <h2>Hi, I'm Julie, a software developer & designer specializing in full-stack web development.</h2>
        </div>
        <p>With a heart for design, I love to create elegant, beautiful and responsive web applications.</p>
      </div>
    </div>
  );
};

export default About;
