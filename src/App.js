import React, { Component } from 'react';
import { withRouter, Link} from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import Routes from './Routes';
import RouteNavItem from './components/RouteNavItem';
import './App.css';

class App extends Component {
  handleNavLink(e){
    e.preventDefault();
    this.props.history.push(e.currentTarget.getAttribute('href'));
  }
  render() {
    return (
      <div className="App container">
        <Navbar fluid collapseOnSelect>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Scratch</Link>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <RouteNavItem onClick={this.handleNavLink.bind(this)} href="/signup">Signup</RouteNavItem>
              <RouteNavItem onClick={this.handleNavLink.bind(this)} href="/login">login</RouteNavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default withRouter(App);
