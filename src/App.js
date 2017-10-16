import React, { Component } from 'react';
import logo from './logo.svg';
import { loginGithub } from "./githubOAuth.js";
import './App.css';

class App extends Component {



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload. LOLOLOL
        </p>
        <button className="square" onClick={() => loginGithub()}>
          Sign In
        </button>
      </div>
    );
  }
}

export default App;
