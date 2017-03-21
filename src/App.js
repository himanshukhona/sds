import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppComponent from 'grommet/components/App';
import Title from 'grommet/components/Title';

class App extends Component {
  render() {
    return (
      <AppComponent>
       <Title>Hello World</Title>
       <p>Hello from a Grommet page!</p>
     </AppComponent>
    );
  }
}

export default App;
