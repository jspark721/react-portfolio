import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './components/Home';

import logo from './logo.svg';
import './styles/App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path='/' component= { Home }/>
      </BrowserRouter>
    );
  }
}

export default App;
