import React from "react";

//Importacion Estilos Accordeon
import "../componentes/acordeon.css";

//Importacion del Archivo, Componentes Foro.jsx
// import Foro from "../componentes/Foro.jsx";


// Importacion Las pripiedades Button de react-bootstrap
import { Button } from "react-bootstrap"; 
//Importacion Las pripiedades Accordion de react-bootstrap
import Accordion from "react-bootstrap/Accordion";

// Importaciones las propiedades para carrusel bootstrap con imagenes
import Carousel from "react-bootstrap/Carousel";
import CarouselCaption from "react-bootstrap/esm/CarouselCaption";
import ImagenCarrousel2 from "../assets/img/Carrusel2.jpeg";

// Importacion de Link de RouterDom
import { Link } from "react-router-dom";

//Importacion las pripiedade de tablas bootstrap :
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";



function Acordeon() {
  return (
    // Sesion del contenedor de lado derecha
    <div className="columDerecha">
      <h1 className="textoFullStack">Desarrolladores Full Stack</h1>
      <h3 className="textoFullStack1"> Desarrollo del Bootcamp </h3>

      {/* Sesion de slider */}
      <div className="carrouselPag">

        {/* SESION DE CARRUSEL */}
        <Carousel>
          <Carousel.Item>
            <img
              src={ImagenCarrousel2}
              alt=""
              width={"30%"}
              height={"30%"}
              responsive />
            <CarouselCaption>
              {/* <h3>Primera imagen</h3>
                    <p><font color ='black'>Segundo curso de programacion orientada a la web</font></p> */}
            </CarouselCaption>
          </Carousel.Item>

          {/* SEGUNDA SESION DE CARRUSEL */}
          <Carousel.Item>
            <img
              src={ImagenCarrousel2}
              alt=""
              width={"30%"}
              height={"30%"}
              responsive
            />
            <CarouselCaption>
              {/* <h3>Segundo imagen</h3>
                    <p>Segundo curso de programacion orientada a la web</p> */}
            </CarouselCaption>
          </Carousel.Item>
        </Carousel>
      </div>
      
      {/* Sesion de salto de lineas */}
      <br />
      <br />

      {/* SESION DE TABLAS SUBMENUS */}
      <div className="tabPag">
        {/* Sesiones de Botones ocultos, como un submenu*/}
        <Tabs
          data-bs-theme="dark"
          defaultActiveKey="profile"
          id="fill-tab-example"
          className="mb-3 outline-light"
          justify
        >
          <Tab eventKey="noticia1" title="Noticia1" className="mb-3">
            Estimado, Campistas TECH; ¿Cómo van tus expectativas de aprendizaje
            y calidad en la formación del proyecto Talento TECH? Esperamos
            continúen siendo memorables, en el Ministerio TIC seguimos
            acompañándote para llevar tus habilidades digitales al siguiente
            nivel y convertirlas en una fuerza imparable. Queremos que tu
            participación durante todo el proceso sea enriquecedora y es una
            tarea que nos motiva, por eso te invitamos a compartir tu
            experiencia a través de una pequeña encuesta, esto nos permitirá
            mejorar los procesos de formación.
          </Tab>
          <Tab eventKey="noticia2" title="Noticia2" className="mb-3">
            Estimado, Campistas TECH; ¿Cómo van tus expectativas de aprendizaje
            y calidad en la formación del proyecto Talento TECH? Esperamos
            continúen siendo memorables, en el Ministerio TIC seguimos
            acompañándote para llevar tus habilidades digitales al siguiente
            nivel y convertirlas en una fuerza imparable. Queremos que tu
            participación durante todo el proceso sea enriquecedora y es una
            tarea que nos motiva, por eso te invitamos a compartir tu
            experiencia a través de una pequeña encuesta, esto nos permitirá
            mejorar los procesos de formación.
          </Tab>
          <Tab eventKey="noticia3" title="Noticia3" className="mb-3">
            Estimado, Campistas TECH; ¿Cómo van tus expectativas de aprendizaje
            y calidad en la formación del proyecto Talento TECH? Esperamos
            continúen siendo memorables, en el Ministerio TIC seguimos
            acompañándote para llevar tus habilidades digitales al siguiente
            nivel y convertirlas en una fuerza imparable. Queremos que tu
            participación durante todo el proceso sea enriquecedora y es una
            tarea que nos motiva, por eso te invitamos a compartir tu
            experiencia a través de una pequeña encuesta, esto nos permitirá
            mejorar los procesos de formación.
          </Tab>
        </Tabs>
      </div>

      {/* SESION DE ACORDEON*/}
      <div className="acordeonPag">
        <Accordion flush>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>Sesión 1-</h4>
              <h5> Jueves, 21 de marzo de 2024</h5>{" "}
              <Button variant="danger" size="sm" disabled>
                Finalizado
              </Button>
            </Accordion.Header>
            <Accordion.Body>
              <img src={ImagenCarrousel2} width={"20%"} alt="" />
              <br/>
              <b>Horario de la sesión:</b>
              <br />
              jueves, 21 de marzo de 2024 a las 5:55 AM
              <br />
              <b className="textoVerde">Asistencia: 
              Asistencia marcada </b>
              <br />
              <b>Descripción: </b>
              Descripción de la Sesión 1<br />

              {/* SESION LINK VINCULOS */}
              <Link to={"/cuerpo2"} className="btn btn-danger">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                  />
                </svg>{" "}
                Ingresa aqui{" "}
              </Link>
            </Accordion.Body>
          </Accordion.Item>
          <br />
          {/* Segundo Acordeon */}
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h4>Sesión 2-</h4>
              <h5> Jueves, 21 de marzo de 2024</h5>{" "}
              <Button variant="danger" size="sm" disabled>
                Finalizado
              </Button>
            </Accordion.Header>
            <Accordion.Body>
            <img src={ImagenCarrousel2} width={"20%"} alt="" />
              <br/>
              <b>Horario de la sesión:</b>
              <br />
              viernes, 22 de marzo de 2024 a las 5:55 AM
              <br />
              <b className="textoVerde">Asistencia:  
              Asistencia marcada
              </b>
              <br />
              <b>Descripción: </b>
              Descripción de la Sesión 1<br />


              {/* SESION LINK VINCULOS */}
              <Link to={"/cuerpo2"} className="btn btn-danger">
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-arrow-right"
                  viewBox="0 0 16 16">
                  <path
                    fill-rule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8" />
                </svg>{" "}
                Ingresa aqui{" "}
              </Link>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>

        <br/>
        
        {/* Sesion de llamado al modulo del componente Foro */}
        {/* <Foro /> */}

      </div>
    </div>
  );
}
export default Acordeon;
