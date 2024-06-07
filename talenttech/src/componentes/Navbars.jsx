import React from 'react';
//Importacion del componente contenedor
import Container from "react-bootstrap/Container";

//Importacion de nav
import Nav from "react-bootstrap/Nav";
//Importacion de hijos de navbars
import Navbar from "react-bootstrap/Navbar";
//Importacion de NavDropdown Despliegue un submenus
import NavDropdown from "react-bootstrap/NavDropdown";


function Navbars() {
  return (
    <div className="menuIzquierda">
        {/* Sesion de Navbar */}
      <Navbar expand="lg" bg="primary" data-bs-theme="dark">
        {/* Sesion de container */}
        <Container>
          {/* Sesion de Navbar.brand */}
          <Navbar.Brand href="#incio">Inicio</Navbar.Brand>

          {/* Sesion de control responsive, navbarToggle y navbarCollapse */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Sesion de menus */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* Sesion de hipervinculos */}
              <Nav.Link href="#">Vision</Nav.Link>
              <Nav.Link href="#">Mision</Nav.Link>
              <Nav.Link href="#">Contactar</Nav.Link>

              {/* Sesion despliegues sumbmenus */}
              <NavDropdown title='Categorias' id="basic-nav-dropdown">
                {/* Sesion de hijos de submenus */}
                <NavDropdown.Item href="#">Contabilidad</NavDropdown.Item>
                <NavDropdown.Item href="#">Tesoreria</NavDropdown.Item>
                <NavDropdown.Item href="#">Control interno</NavDropdown.Item>
              </NavDropdown>
            
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Navbars