import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "../componentes/acordeon.css";
import { Button } from "react-bootstrap"; // Importa el componente Button de react-bootstrap

function Acordeon() {
  return (
    <div className="columDerecha">
      <h1 className="textoFullStack">Desarrolladores Full Stack</h1>
      <br />
      ...
      <p>Desarrollo del Bootcamp</p>
      {/* Sesion Acordeon */}
      <div className="acordeonPag">
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>Sesión 1-</h4>
              <h5> Jueves, 21 de marzo de 2024</h5>{" "}
              <Button variant="danger" size="sm" disabled>
                Finalizado
              </Button>
            </Accordion.Header>

            <Accordion.Body>
              <b>Horario de la sesión:</b>
              <br />
              jueves, 21 de marzo de 2024 a las 5:55 AM
              <br />
              <b>Descripción:</b>
              Descripción de la Sesión 1<br />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>
  );
}
export default Acordeon;
