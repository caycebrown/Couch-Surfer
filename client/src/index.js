import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import App from './App';
import Search from './/Components/Search';

const routing = (
    <Router>
      <div>
        <Route exact path="/" component={App} />
        <Route path="/search" component={Search} />
        <Route path="/contact" component={Search} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))



