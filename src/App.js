import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import Landing from './components/Landing';
import Morning from './components/dailypages/Morning';
import Noon from './components/dailypages/Noon';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentRender: "Landing"
    };
    this.setRender = this.setRender.bind(this);
  }

  routing() {
    if (this.state.currentRender === "Landing") {
      return <Landing setRender={this.setRender.bind(this)} />;
    } else if (this.state.currentRender === "Morning") {
      return <Morning setRender={this.setRender.bind(this)} />;
    } else if (this.state.currentRender === "Noon") {
      return <Noon setRender={this.setRender.bind(this)} />;
    }
  }

  setRender(varible){
    this.setState({currentRender : varible});
  }

  render() {
    return (
      <div>
      <Button
        className="primary"
        labelPosition='left'
        icon='left chevron'
        content='Back'
        onClick={() => this.setRender("Landing")} />
      { this.routing() }
      </div>
    );
  }
}

export default App;
