import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Messages from './Messages';
import TheDate from './state/TheDate';

class App extends Component {
  render() {
    return (
      <TheDate />
    );
  }
}

export default App;
