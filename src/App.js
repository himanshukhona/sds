import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from 'grommet/components/App';
import Dashboard from './components/Dashboard/Dashboard'
import HeaderComponent from './components/Header'


class App extends Component {
  render() {
    return (
      <AppComponent>
          <HeaderComponent></HeaderComponent>
          <Dashboard></Dashboard>
     </AppComponent>
    );
  }
}

export default App;
