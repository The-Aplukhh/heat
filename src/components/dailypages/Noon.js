import React, {Component} from 'react';
import {Container, Form} from 'semantic-ui-react'
import axios from 'axios'
import querystring from 'querystring';

class Noon extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  handleChange = (e, {name, value}) => this.setState({[name]: value});
  updateData = (x) => {
    console.log('called')
    axios({
      method: 'Put',
      url: 'http://localhost:8000/api/updateData',
      data: querystring.stringify({Name: "ahmad", noon: "good"})
    }).then((response) => {
      console.log(response)

    }).catch(function(error) {
      console.log(error);
    });
  };

  render() {
    const {emotionalHealth} = this.state
    return (

      <Container style={{
        marginTop: '3em'
      }}>

        <Form>
          <Form.Group widths='equal'>
            <p>it is nooon baby</p>
          </Form.Group>
          <Form.Checkbox label='Good' value={"Good"} name='emotionalHealth' onChange={this.handleChange}/>
          <Form.Checkbox label='Baad' value={"Baad"} name='emotionalHealth' onChange={this.handleChange}/>

          <Form.Button onClick={() => this.updateData(this.state)}>Submit</Form.Button>
        </Form>
      </Container>
    )
  }
}

export default Noon;
