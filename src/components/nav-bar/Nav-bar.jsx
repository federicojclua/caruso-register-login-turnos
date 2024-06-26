import React from 'react';
import './Nav-bar.css'; // Ruta corregida
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

const NavBar = () => {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
        <Container>
          <img className='cfc-logo' src="src\assets\img\cfc-logo.png" alt="logo-caruso" />
          
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link style={{ color: '#ffffff;' }} href="#features">Nuestro Merch</Nav.Link>
              <Nav.Link style={{ color: '#ffffff;' }} href="#pricing">Nuestra tienda</Nav.Link>
              <NavDropdown clasName="item-dropdown" style={{ color: '#ffffff;' }} title="Los Estadios"  >
                <NavDropdown.Item style={{ color: '#ffffff;' }} href="#action/3.1">Estadio1</NavDropdown.Item>
                <NavDropdown.Item style={{ color: '#ffffff;' }}href="#action/3.3">Estadio2</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link style={{ color: '#ffffff;' }} eventKey={2} href="#memes">
                iniciar sesión
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;