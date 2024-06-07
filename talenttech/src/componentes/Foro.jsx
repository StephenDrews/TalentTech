import React from "react";
import Card from 'react-bootstrap/Card';
import { CardImg } from "react-bootstrap";
import ListGroup from 'react-bootstrap/ListGroup';
import ImagenDriver1 from '../assets/img/Drive.png';


import "../componentes/foro.css";

function Foro() {
  return (
    <div className="foroPag">
        
    {/* Sesion de Card */}
    <Card style={{ width: '68rem' }}>
      <CardImg variant="top" src={ImagenDriver1} alt="" width={"10%"} height={"150px"} />
      <Card.Body className="btn btn-white">
        <Card.Title>Recursos</Card.Title>
        <Card.Text className="mb-3 outline-light">
          Bienvenido Tripulante, encuentra aqui tu material de apoyo con relacion a tu interes.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item className="btn btn-secondary">Kit Del Programador</ListGroup.Item>
        <ListGroup.Item className="btn btn-secondary">Actividades de estudiantes</ListGroup.Item>
        <ListGroup.Item className="btn btn-secondary">Material de clase</ListGroup.Item>
        <ListGroup.Item className="btn btn-secondary">Contenido Tematico</ListGroup.Item>
        <ListGroup.Item className="btn btn-secondary">Tutorias Componente Tecnico</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link className="btn btn-Secundary" href="#">Mas Detalles</Card.Link>
        <Card.Link className="btn btn-Secundary" href="#">Menos Detalles</Card.Link>
      </Card.Body>


      
    </Card>
    </div>
  );
}

export default Foro;
