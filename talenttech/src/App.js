import React from "react";

//Sesion de importacion de los componentes
import "./componentes/container.css";
import Cuerpo from "./componentes/Cuerpo.jsx";
import Acordeon from "./componentes/Acordeon.jsx";
import Footer from "./componentes/Footer.jsx";
import Foro from "./componentes/Foro.jsx";



// Sesion de importacion de uso de propiedades con Bootstrap
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  return (
    // Clase contenedor
    <div className="bodyContenedores">
    <Container fluid>
      <Row>
        <Col>
          <div className="user-profile">
            {/* Contenido del perfil de usuario */}
          </div>
        </Col>
        <Col>
          <div className="logo">{/* Logo de la empresa o aplicación */}</div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="navigation-menu">{/* Menú de navegación */}</div>
        </Col>
        <Col>
          <div className="carousel">
            {/* Carrusel de imágenes o contenido */}
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="accordion">{/* Componente de acordeón */}</div>
        </Col>
        <Col>
          <div className="secondary-menu">
            {/* Menú secundario u otro componente interactivo */}
          </div>
        </Col>
      </Row>
    </Container>
    

    {/* Sesion de extraccion de modulos */}
    <Cuerpo />
    <Acordeon />
    <Foro />
    <Footer />

    </div>
  );
}

export default App;
