import React from "react";
// import { Link } from "react-router-dom";
import Signin from "./Signin";
import {
  Navbar,
  Nav,
//   NavDropdown,
//   Form,
//   FormControl,
//   Button,
} from "react-bootstrap";
const Header = () => {
  return (
    <>
      <header className="header">
        <Navbar expand="lg" sticky="top" className="container-fluid">
          <Navbar.Brand href="#home" className="chirp-logo">Chirp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
            <Nav className="">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about-us">Contact Us</Nav.Link>
              <Nav.Link href="/contact-us">About Us</Nav.Link>
              <Signin text={"Sign in with Twitter"} />
               
            </Nav>
        
          </Navbar.Collapse>
        </Navbar>

      </header>
    </>
  );
};

export default Header;
