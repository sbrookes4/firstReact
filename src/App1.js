import React, { Component } from 'react';
import logo from './logo1.svg';
import './App1.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo1" alt="logo" />

          <h1 className="whoa">WHOA!</h1>

        </header>
      </div>
    );
  }
}

export default App;
