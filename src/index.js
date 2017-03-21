import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
//import createBrowserHistory from 'history/createBrowserHistory'
import App from './App';
import Settings from './components/Settings'
import NotFound from './components/NotFound'
import './index.css';

//const history = createBrowserHistory()

ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/settings" component={Settings}/>
      <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('root'));
