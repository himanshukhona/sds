import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import App from './App';
import Settings from './components/Settings/Settings'
import Account from './components/Settings/Account'
import Users from './components/Settings/Users'
import Devices from './components/Settings/Devices'
import Subscription from './components/Settings/Subscription'
import NotFound from './components/NotFound'
import Contact from './components/Contact'
import About from './components/About'
import AddChart from './components/Dashboard/AddChart'
import './index.css';
import 'grommet/scss/vanilla/index.scss';

import rootReducer from './reducers/index.js'
let store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


ReactDOM.render((
  <Provider store={store}>
  <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/addchart" component={AddChart}/>
      <Route path="/contact" component={Contact}/>
      <Route path="/about" component={About}/>
      <Route path="/settings" component={Settings} >
        <Route path="/accounts" component={Account} />
        <Route path="/users" component={Users} />
        <Route path="/devices" component={Devices} />
        <Route path="/subscription" component={Subscription} />
      </Route>
      <Route path='*' component={NotFound} />
  </Router>
  </Provider>
), document.getElementById('root'));
