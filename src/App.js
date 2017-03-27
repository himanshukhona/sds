import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from 'grommet/components/App';
import Dashboard from './components/Dashboard/Dashboard'
import HeaderContainer from './components/HeaderContainer'

class App extends Component {

  render() {
    return (
      <AppComponent>
          <HeaderContainer></HeaderContainer>
          <Dashboard></Dashboard>
     </AppComponent>
    );
  }
}

export default App;
