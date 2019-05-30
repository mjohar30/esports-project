import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText, Col, Row } from 'reactstrap';
import Navbar from '../components/Navbar'

class Register extends Component {
    render() {
        return (
          <div>
            <Navbar></Navbar>
            <br/>
            <br/>
            <br/>
            <div className="form">
            <Form>
              <FormGroup>
                <Col sm="6">
                <Label for="name">Nombre del jugador</Label>
                <Input xs="5" type="text" name="name" id="name" placeholder="Nombre del jugador" />
                </Col>
              </FormGroup>
              <FormGroup>
                <Row>
                <Col sm="5">
                <Label for="paisOrigen">País de origen</Label>
                  <Input type="select" name="select" id="paisOrigen">
                    <option>México</option>
                  </Input>
                </Col>
                <Col sm="5">
                <Label for="exampleSelect">Estado</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Ciudad de México</option>
                  </Input>
                </Col>
                </Row>
              </FormGroup>
              <FormGroup>
                <Label for="email">Correo electrómico</Label>
                <Input type="email" name="email" id="email" placeholder="juan@esports.com" />
              </FormGroup>
              <FormGroup>
                <Label for="password">Password</Label>
                <Input type="password" name="password" id="password" placeholder="****" />
              </FormGroup>
              <FormGroup>
                <Label for="seleccionJuego">Seleccionar juego</Label>
                  <Input type="select" name="select" id="seleccionJuego">
                    <option>Overwatch</option>
                  </Input>
              </FormGroup>
              <FormGroup>
                <Label for="exampleSelect">Plataforma en la que juega</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>Ciudad de México</option>
                  </Input>
                <Label for="gamertag">Gamertag de esa plataforma</Label>
                <Input type="text" name="gamertag" id="gamertag" placeholder="gamertag">
                </Input>
              </FormGroup>
              <Button>Submit</Button>
            </Form>
            </div>
          </div>
        );
    }
}

export default Register;