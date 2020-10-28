import React, { Component } from "react";
import Logo from "../../images/Logo.png";

import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import "./nav-bar.css";

export default class index extends Component {
  render() {
    return (
      <div>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          id="nav-bar"
        >
          <Navbar.Brand href="/">
            <img
              src={Logo}
              width="140"
              height="45"
              style={{borderRadius: '30px', height:"55px"}}
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Sorteios</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="/singin">Login</Nav.Link>
              <Nav.Link href="/singup">Cadastro</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
