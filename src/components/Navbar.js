import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

import linkdin from '../assets/img/instagram.svg'
import facebook from '../assets/img/facebook.svg';
import instagram from '../assets/img/instagram.svg';
import tgicon from '../assets/img/telegram.svg'
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";


export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <h1 className="navbar-name">Albin<span className="navbar-lastname">Binu</span></h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#connect" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Contact</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                {/* linkdin icon */}
                <a href="https://linkdin.com/"><img src={linkdin} alt="" /></a>
                {/* fb icon */}
                <a href="https://facebook.com/albin.binu.526/"><img src={facebook} alt="" /></a>
                {/* instagram icon */}
                <a href="https://instagram.com/albinbinu.me"><img src={instagram} alt="" /></a>
                {/* tg icon */}
                <a href="t.me/Albin_binu"><img src={tgicon} alt="" /></a>
              </div>
              <HashLink to='#connect'>
                <button className="vvd"><span>Let’s<span className="cnt"> Connect</span> </span></button>
              </HashLink>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  )
}