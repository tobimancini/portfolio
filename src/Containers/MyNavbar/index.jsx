import React, { useEffect, useRef, useState } from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


const MyNavbar = () => {


  // const [navColor, setNavColor] = useState("white");
  // const [animateDisplay, setAnimateDisplay] = useState(false);
  // const navRef = useRef();

  // useEffect(() => {
  //   const currentRef = navRef.current;
  //   const handleColor = () => {
  //     const { y } = currentRef.getBoundingClientRect();
  //     console.log(y);
  //     // if (y <= 600) {
  //     //   setNavColor(1);
  //     //   setAnimateDisplay(true);
  //     // }
  //     // if (animateDisplay === true && y >= 600) {
  //     //   setNavColor(2);
  //     // }
  //   }
  //   window.addEventListener('scroll', () => handleColor())

  //   return () => {
  //     window.removeEventListener('scroll', () => handleColor())
  //   }

  // }, [navColor, animateDisplay]);

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className='logoClass' href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar