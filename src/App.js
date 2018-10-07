import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">

          <h1>Hello World</h1>
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
             My first React page OMG LOL
          </a>

          <h1>My First Cipher</h1>
          <h2>
            There is a short sentence encoded in the cipher below. I came up with the pattern in high school. You can contact
            me at shawnabrookes@gmail.com when you figure it out. I can send you a prize :)
          </h2>

          <p>
          "Eclipses every evening beer rusty potato postponed dethroned. 
          Ants clean sawdust parading straying camels.
          Sometimes standing brats stir frantic antics. 
          When will not both.
          Henry sent Calvin Coolidge jello.
          Whispering toads formed smelly fronds."
          </p>

        </header>
      </div>
    );
  }
}

export default App;
