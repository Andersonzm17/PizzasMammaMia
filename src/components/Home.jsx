import React, { useEffect, useState}from "react";
import Header from "/Desafio Latam/pizzeria/src/components/header";
import CardPizza from "./CardPizza";
import { pizzas } from "../data/pizzas";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";


const Home = () => {
  const [pizza, setPizza] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
      });
  });
  return (
    <div>
      <Header />
      <Container className="justify-content-between">
        <Row className="p-4 pt-5 pb-5 ">
          {pizza.map((pizza) => (
            <Col
              sm="12"
              md="6"
              lg="4"
              className="mt-4 d-flex justify-content-center"
            >
              <CardPizza key={pizza.id} pizza={pizza} />
            </Col>
          ))}
        </Row>
      </Container>
      </div>
  );
};

export default Home;
