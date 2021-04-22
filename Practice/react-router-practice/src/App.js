import './App.css';
import React, { Component } from 'react';
import Nav from './Nav';
import About from './About';
import Shop from './Shop';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Nav/>
          <Switch>

            <Route exact path="/">
              <Home/>
            </Route>

            <Route path="/about">
              <About/>
            </Route>

            <Route path="/shop">
              <Shop/>
            </Route>
  
          </Switch>
        </Router>
      </div>
    )
  }

}