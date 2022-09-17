import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyNavbar = () => {

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className='logoClass' href="#home">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aboutMe">
              <p>About Me</p>
              <span></span>
            </Nav.Link>
            <Nav.Link href="#education">
              <p>Education</p>
              <span></span>
            </Nav.Link>
            <Nav.Link href="#myProjects">
              <p>My Projects</p>
              <span></span>
            </Nav.Link>
            <Nav.Link href="#contactForm">
              <p>Contact</p>
              <span></span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar