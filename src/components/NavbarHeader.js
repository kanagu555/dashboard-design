import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Question, BellFill, PersonFill } from 'react-bootstrap-icons';
import './NavbarHeader.css'
import logo from '../assets/logo.PNG'

const NavbarHeader = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="nav-bar">
      <Container>
        <Navbar.Brand href="#home"><img src={logo} className="logo" alt="logo"/> DIGITAL EAST <span className="company-name">DESSY</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets" className="nav-link"><Question className="nav-icon-question" size={25}/><br/>HELP</Nav.Link>
            <Nav.Link href="#memes" className="nav-link"><BellFill className="nav-icon-bell"/><br/>NOTIFICATIONS</Nav.Link>
            <Nav.Link href="#memes" className="nav-link"><PersonFill className="nav-icon-person" size={19}/><br/>USER</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
