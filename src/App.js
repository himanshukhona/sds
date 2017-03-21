import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from 'grommet/components/App';
import Box from 'grommet/components/Box';
import HeaderComponent from './components/Header'

class App extends Component {
  render() {
    return (
      <AppComponent>
          <HeaderComponent></HeaderComponent>
          <Box><h1>Dashboard</h1></Box>
     </AppComponent>
    );
  }
}

export default App;
