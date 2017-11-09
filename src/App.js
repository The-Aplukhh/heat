import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import './App.css';
import Landing from './components/Landing';
import Morning from './components/dailypages/Morning';
import Noon from './components/dailypages/Noon';

const BrowserWindow = window.require('electron').remote.BrowserWindow;


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

  login() {
    var authWindow = new BrowserWindow({ width: 800, height: 600, show: false, 'node-integration': false });
    var authUrl = 'http://127.0.0.1:8000/auth/github';
    authWindow.loadURL(authUrl);
    authWindow.show();

    authWindow.webContents.on('did-get-redirect-request', function (event, oldUrl, newUrl) {
      var raw_code = /code=([^&]*)/.exec(newUrl) || null,
        code = (raw_code && raw_code.length > 1) ? raw_code[1] : null,
        error = /\?error=(.+)$/.exec(newUrl);

      if (code || error) {
        // Close the browser if code found or error
        console.log("code recieved: " + code);

        authWindow.close();
      }
    });
    // Reset the authWindow on close
    authWindow.on('close', function () {
      authWindow = null;
    }, false);

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
      <Button
       onClick={() => this.login()} >
       Login
      </Button>
      { this.routing() }

      </div>
    );
  }
}

export default App;
