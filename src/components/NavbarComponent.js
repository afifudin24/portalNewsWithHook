import React, { Component } from 'react';
import { Navbar,  Container } from 'react-bootstrap';

class NavbarComponent extends Component {
  render() {
    return (
      <Navbar bg="danger" className="text-white" expand="lg">
        <Container className="justify-content-center">
          <Navbar.Brand href="#home" className="text-white mx-auto text-bold fw-bold">
            Portal News
          </Navbar.Brand>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComponent;
