import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Nav, Container } from 'react-bootstrap';

import Home from './Home';
import About from './About';
import Skills from './Skills';
import Contact from './Contact';

function App() {
  return (
    <>
      {/* Navigation */}
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
        <Container>
          <Navbar.Brand href="#home">Kent Asilo</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Home />
      <About />
      <Skills />
      <Contact />
    </>
  );
}

export default App;
