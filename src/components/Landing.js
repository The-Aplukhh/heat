import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import logo from './../assets/rbklogo.png';



class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      router: Landing
    };
  }



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome ___ to RBK</h1>
        </header>
        <p className="App-intro">
            Put something useful here?
        </p>
        <Button className="primary" onClick={() => this.props.setRender("Morning")}>
          Morning
        </Button>

        <Button className="primary" onClick={() => this.props.setRender("Noon")}>
          Noon
        </Button>

        <Button className="primary" onClick={() => console.log("lol")}>
          Evening
        </Button>
      </div>
    );
  }
}

export default Landing;
