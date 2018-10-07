import React, { Component } from 'react';
import logo from './logo2.svg';
import './App2.css';

class App extends Component {
  render() {
    return (
      <div className="App2">
        <header className="App-header2">
          <img src={logo} className="App-logo2a" alt="logo" />
          <img src={logo} className="App-logo2" alt="logo" />
        </header>
      </div>
    );
  }
}

export default App;
