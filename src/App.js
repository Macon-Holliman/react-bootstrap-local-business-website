import React from 'react';
import './App.scss';

import { Redirect, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import $ from 'jquery';

import Nav from './components/Nav/Nav'
import Home from './components/Home/Home'
import Contact from './components/Contact/Contact'
import About from './components/About/About'
import Explore from './components/Explore/Explore'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="App container-fluid">
      <Router>
        <Nav />
          <div className="card">
            
            <Switch>
              <Route exact path="/" component={Home} />
                <Route path="/about" component={About} />
                <Route path="/contact" component={Contact} />
                <Route path="/explore" component={Explore} />
                <Redirect to="/" />
            </Switch>
          </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
