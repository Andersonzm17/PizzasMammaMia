import React from "react";
import { Button, Card } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CardPizza = ({ pizza }) => {
const {pizzaCount, setPizzaCount, totalCart, setTotalCart, pizzas} = useContext (CartContext);
function incrementCount(id) {
  const existingPizza = pizzaCount.find((item) => item.id === id);
  if (existingPizza) {
    const updatedCart = pizzaCount.map((item) =>
      item.id === id ? { ...item, count: item.count + 1 } : item
    );
    setPizzaCount(updatedCart);
    calculateTotal(updatedCart);
  } else {
    const pizzaToAdd = pizzas.find((pizza) => pizza.id === id);
    const newCart = [...pizzaCount, { ...pizzaToAdd, count: 1 }];
    setPizzaCount(newCart);
    calculateTotal(newCart);
  }
}
function calculateTotal(updatedCart) {
  const total = updatedCart.reduce(
    (sum, pizza) => sum + pizza.price * pizza.count,
    0
  );
  setTotalCart(total);
}

  return (
    <div className="card mx-2 my-3" style={{ width: "18rem" }}>
      <img src={pizza.img} className="card-img-top" alt={pizza.name} />
      <div className="card-body">
        <h5 className="card-title">{pizza.name}</h5>
        <p className="card-text">{pizza.desc}</p>
        <p className="card-text">
          <strong>Ingredientes:</strong>{" "}
          {pizza.ingredients.map((ingredients, index) => {
            return <li className="fw-light" key= {index}> {ingredients}</li>;
          })}
        </p>
        <p>
          <strong>Precio:</strong> ${pizza.price.toLocaleString()}
        </p>
          <Button variant="light">Ver mas</Button>
          <Button variant="dark" onClick={() => incrementCount (pizza.id)}>Añadir</Button>
        </div>
      </div>
    
  );
};

export default CardPizza;
