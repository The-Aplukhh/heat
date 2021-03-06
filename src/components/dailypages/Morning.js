import React, {Component} from 'react';
import {Container, Form} from 'semantic-ui-react'
import axios from 'axios'
import querystring from 'querystring';


class Morning extends Component {
  constructor(props) {
    super(props);
    this.state = {
      attendance:'checked'
    };
  }
  handleChange = (e, {name, value}) => this.setState({[name]: value});
  sendData = (x) => {
    console.log(x)
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/addData',
      data: querystring.stringify({pairData: "a", emotionalHealth: "ahmad", attendance: "a"})
    }).then((response) => {
      alert('thanks for your input')
      this.props.setRender("Landing")
    }).catch(function(error) {
      console.error(error);
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
            <p>How Do You Feel Today ?</p>
          </Form.Group>
          <Form.Checkbox label='Good' value={"Good"} name='emotionalHealth' onChange={this.handleChange}/>
          <Form.Checkbox label='Baad' value={"Baad"} name='emotionalHealth' onChange={this.handleChange}/>

          <Form.Button onClick={() => this.sendData(this.state)}>Submit</Form.Button>
        </Form>
      </Container>
    )
  }
}

export default Morning;
