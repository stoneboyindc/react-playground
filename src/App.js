import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';
import HelloWorld from './state-drills/HelloWorld';

class App extends Component {
  render() {
    return (
      <HelloWorld />
    );
  }
}

export default App;
