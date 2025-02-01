import React, { useContext, useEffect, useState}from "react";
import Header from "../components/header";
import CardPizza from "../components/CardPizza";
import { pizzas } from "../data/pizzas";
import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row } from "react-bootstrap";
import { CartContext } from "../context/CartContext";


const Home = () => {
  const {pizzas, setPizzas} = useContext(CartContext);
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas")
      .then((res) => res.json())
      .then((data) => {
        setPizzas(data);
      });
  });
  return (
    <div>
      <Header />
      <Container className="justify-content-between">
        <Row className="p-4 pt-5 pb-5 ">
          {pizzas.map((pizza) => (
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
