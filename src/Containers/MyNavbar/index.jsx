import React, { useContext, useEffect, useRef, useState } from 'react';
import './styles.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Tools } from '../../Context';
import { BiMoon, BiSun } from 'react-icons/bi';


const MyNavbar = () => {

  const { time, setTime } = useContext(Tools);

  const [selectTime, setSelectTime] = useState(time);

  const setTimeTheme = setInterval(() => {
    if (time === "day" || time === "night") {
      setSelectTime(time);
      clearInterval(setTimeTheme);
    }
  }, 500);


  const handleTime = (dayOrNight) => {
    setSelectTime(dayOrNight);
    setTime(dayOrNight);
  }

  return (
    <Navbar collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand className='logoClass' href="#mainContainer">tm</Navbar.Brand>
        <Navbar.Brand>
          <div className='dayNight'>
            <div className='day'>
              <div className={selectTime === "day" ? 'iconContain select' : 'iconContain'} onClick={() => handleTime("day")}>
                <BiSun className='timeIcon' />
                <span className='left'></span>
              </div>
            </div>
            <div className='night'>
              <div className={selectTime === "night" ? 'iconContain select' : 'iconContain'} onClick={() => handleTime("night")}>
                <BiMoon className='timeIcon' />
                <span className='right'></span>
              </div>
            </div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#aboutMe">
              <p>ABOUT ME</p>
            </Nav.Link>
            <Nav.Link href="#education">
              <p>EDUCTATION</p>
            </Nav.Link>
            <Nav.Link href="#myProjects">
              <p>MY PROJECTS</p>
            </Nav.Link>
            <Nav.Link href="#contactForm">
              <p>CONTACT</p>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar