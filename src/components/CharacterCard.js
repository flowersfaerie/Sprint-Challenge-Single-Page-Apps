import React from "react";
import { Card, CardHeader, CardBody, CardText, Col } from 'reactstrap';

const CharacterCard = props => {
  // console.log(props.character)

  return (
    <Col xs='6' md='4' lg='3'>
      <Card>
        <CardHeader>
          {props.character.name}
        </CardHeader>
        <CardBody>
          <CardText>Status: {props.character.status}</CardText>
          <CardText>Species: {props.character.species}</CardText>
          <CardText>Type: {props.character.type}</CardText>
          <CardText>Gender: {props.character.gender}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CharacterCard;