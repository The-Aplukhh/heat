import React, { Component } from 'react';
import './App.css';
import Landing from './components/Landing';
import Morning from './components/dailypages/Morning';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRender: "Landing"
    };
  }

  routing() {
    if (this.state.currentRender === "Landing") {
      return <Landing setRender={this.setRender.bind(this)} />;
    } else if (this.state.currentRender === "Morning") {
      return <Morning setRender={this.setRender.bind(this)} />;
    }
  }

  setRender(varible){
    this.setState({currentRender : varible}, this.routing);
    
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
