import React, { Component } from 'react';
import Navbar from '../components/Navbar'
import Card from '../components/Cards'
import {Row, Col, Jumbotron, Button} from 'reactstrap'
import './Landing.css'
import { FaUser, FaUsers, FaBriefcase} from "react-icons/fa";
import overwatch from '../overwatch.png'


class Landing extends Component {
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Jumbotron className="jumbotron text-white">
        <h1 className="display-3 "> <strong>El futuro de los eSports es aquí </strong></h1>
        <p className="lead">Siempre has querido ser un jugador profesional, ¿Pero no sabes donde postularte?</p>
        <p className="lead">Quieres formar un equipo profesional, ¿Pero no tienes contactos que les interese?</p>
        <hr className="my-2" />
        <p>Este es el lugar indicado para ti</p>
        <p className="lead">
          <Button color="primary">Registrate ahora mismo</Button>
        </p>
        <Button color="primary">Inicia sesión</Button>
      </Jumbotron>
        <Row>
          <Col sm="4">
            <Card icon={<FaUser/>}  title="Los mejores jugadores" text="Revisa sus estadísticas, su información personal 
            y su disponiblidad" button="Checar"> </Card>
          </Col>
          <Col sm="4">
            <Card icon={<FaUsers/>} title="Los mejores equipos" text="Sus logros y sus participantes estarán a la vista de todos." button="Checar"></Card>
          </Col>
          <Col sm="4">
            <Card icon={<FaBriefcase/>} title="Ofertas de empleo" text="Ya sea para un torneo casual o profesional, podrás encontrar 
            los mejores aliados" button="Próximamente"></Card>
          </Col>
        </Row>
        <br></br>
        <Row>
          <Col>
            <Card icon2={<img className="overwatch" src={overwatch} title="Overwatch"></img>}  title="¡No te preocupes!" 
                button="Próximamente" text="Nosotros obtendremos tus estadísticas de los siguientes juegos" ><img src={overwatch} title="Overwatch"></img> </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Landing;