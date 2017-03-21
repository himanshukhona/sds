import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory } from 'react-router'
import App from './App';
import Settings from './components/Settings/Settings'
import Account from './components/Settings/Account'
import Users from './components/Settings/Users'
import NotFound from './components/NotFound'
import './index.css';
import 'grommet/scss/vanilla/index.scss';

ReactDOM.render((
  <Router history={hashHistory}>
      <Route path="/" component={App}/>
      <Route path="/settings" component={Settings} >
        <Route path="/accounts" component={Account} />
        <Route path="/users" component={Users} />
      </Route>
      <Route path='*' component={NotFound} />
  </Router>
), document.getElementById('root'));
