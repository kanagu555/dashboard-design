import React from "react";
import {Navbar, Container, Nav } from 'react-bootstrap'
import './Footer.css'

const Footer = () => {
  return (
      <Navbar bg="light" className="footer-bar">
        <Container>
          <Nav className="footer-flex">
            <Nav.Link>Copyright &#169; {new Date().getFullYear()} Digital East GmbH</Nav.Link>
            <Nav.Link>Imprint</Nav.Link> |
            <Nav.Link>Privacy Policy</Nav.Link> |
            <Nav.Link>Cookies Notice</Nav.Link> |
            <Nav.Link>Terms of Use</Nav.Link> |
            <Nav.Link>Creative Guidelines</Nav.Link> |
            <Nav.Link>Anti Malvertising Policy</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
  );
};

export default Footer;
