import React, {Component} from 'react';
import { Button, FormControl, FormGroup, ControlLabel} from 'react-bootstrap';

import './Login.css';

export default class Login extends Component{
  constructor(){
    super();
    this.state ={username: '', password: ''};
  }

  validateForm(){
    return this.state.username.length > 0 && this.state.password.length > 0
  }

  handleChange(e){
      e.preventDefault();
      this.setState({
        [e.target.id]: e.target.value
      });
  }

  handleSubmit(e){
    e.preventDefault();
  }
  render(){
    return(
      <div className="Login">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="username" bsSize="large">
            <ControlLabel>Email:</ControlLabel>
            <FormControl autoFocus type="email" value={this.state.username} onChange={this.handleChange.bind(this)} />
          </FormGroup>

          <FormGroup controlId="password"bsSize="large">
            <ControlLabel>Password:</ControlLabel>
            <FormControl type="password" value={this.state.password} onChange={this.handleChange.bind(this)} />
          </FormGroup>

          <Button block type="submit" bsSize="large" disabled={!this.validateForm()}> Login </Button>
        </form>
      </div>
    );
  };
}
