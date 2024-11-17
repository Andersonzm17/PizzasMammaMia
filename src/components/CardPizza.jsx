import React from "react";
import { Button, Card } from "react-bootstrap";

const CardPizza = (props) => {
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={props.img} />
      <Card.Title>Pizza {props.nombre}</Card.Title>
      <Card.Header>{props.descripcion}</Card.Header>
      <div>
        <h5>precio{props.precio}</h5>
        <div className="d-flex justify-content-between ">
          <Button variant="light">Ver mas</Button>
          <Button variant="dark">Añadir</Button>
        </div>
      </div>
    </Card>
  );
};

export default CardPizza;
