import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const NavbarComponent = () => {
  return (
    <Navbar bg="danger" className="text-white" expand="lg">
      <Container className="justify-content-center">
        <Navbar.Brand href="#home" className="text-white mx-auto text-bold fw-bold">
          Portal News
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
