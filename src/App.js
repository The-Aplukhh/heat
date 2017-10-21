import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRender: "Landing"
    };
  }

  routing() {
    if (this.state.currentRender === "Landing") {
      return <Landing />;
    }
  }

  render() {
    return (
      <div>
      { this.routing() }
      </div>
    );
  }
}

export default App;
