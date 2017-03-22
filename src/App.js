import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from 'grommet/components/App';
import Box from 'grommet/components/Box';
import HeaderComponent from './components/Header'
import GraphComponent from './components/Graph'
import Columns from 'grommet/components/Columns';

class App extends Component {
  render() {
    return (
      <AppComponent>
          <HeaderComponent></HeaderComponent>
            <Box align='center'>
              <h1>Dashboard</h1>
              <Columns>
                <Box>
                <GraphComponent></GraphComponent>
                </Box>
                <Box>
                Add a Custom Chart
                </Box>
              </Columns>
            </Box>
            <Box align='center'>
              <h1>Popular</h1>
            </Box>
     </AppComponent>
    );
  }
}

export default App;
