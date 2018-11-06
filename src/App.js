import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Home from './components/Home';
import About from './components/About';
import Work from './components/Work';
import Contact from './components/Contact';
import Error404 from './components/Error404'


class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation logo="JP"/>
          <Switch>
            <Route path="/" component= {Home} exact />
            <Route path="/about" component= {About} />
            <Route path="/work" component= {Work} />
            <Route path="/contact" component= {Contact} />
            <Route component= {Error404} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
