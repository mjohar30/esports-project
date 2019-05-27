import React, { Component } from 'react';
import { Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import './Cards.css'

class Cards extends Component {
    render(){
    return (
    <div>
      <Card>
        <div className="icon">
          {this.props.icon}
        </div>
        <CardBody className="text-center">
          <CardTitle>{this.props.title}</CardTitle>
          <CardSubtitle>{this.props.subtitle}</CardSubtitle>
          <CardText>{this.props.text}</CardText>
          <Button>{this.props.button}</Button>
        </CardBody>
      </Card>
    </div>
  );
}
}

export default Cards;