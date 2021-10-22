import React from 'react';
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import useAuth from "../Hook/UseAuth";
import './Header.css';


const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div>
            <Navbar bg="dark" variant="dark" sticky="top" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Container>
            <Navbar.Brand>
              KH Medicare Hospital
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink
                className='links'
                  to="/home"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  Home
                </NavLink>
              </Nav.Link>

              
              <Nav.Link>
                <NavLink
                className='links'
                  to="/doctorlist"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  Doctorlist
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                className='links'
                  to="/medicin"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  Medicin
                </NavLink>
              </Nav.Link>

              <Nav.Link>
                <NavLink
                className='links'
                  to="/about"
                  activeStyle={{
                    fontWeight: "bold",
                    color: "White",
                  }}
                >
                  About Us
                </NavLink>
              </Nav.Link>
              {!user.email ? (
                <Nav.Link>
                  <NavLink
                  className='links'
                    to="/login"
                    activeStyle={{
                      fontWeight: "bold",
                      color: "White",
                    }}
                  >
                    Log In
                  </NavLink>
                </Nav.Link>
              ) : (
                <div>
                  <span style={{ color: "white" }}>{user.email}</span>
                  <Button onClick={logOut}> LogOut</Button>
                </div>
              )}
            </Nav>
          </Container>
        </Navbar.Collapse>
      </Navbar>
        </div>
    );
};

export default Header;

