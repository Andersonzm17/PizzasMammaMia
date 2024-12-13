import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css'

const Pizza = () => {
  const [pizza, setPizza] = useState({ ingredients: [] });
  useEffect(() => {
    fetch("http://localhost:5000/api/pizzas/p002")
      .then((res) => res.json())
      .then((data) => {
        setPizza(data);
      });
  });

  return (
    <div className="m-2 border rounded d-flex flex-column">
      <div className="d-flex container-fluid justify-content-around p-4 align-items-center">
        <div>
          <img src={pizza.img} alt={pizza.id} width={300} />
        </div>
        <div className="ps-4">
          <h3>{pizza.name}</h3>
          <p>
            Precio: <strong>${pizza.price}</strong>
          </p>
          <p>
            Ingredientes:{" "}
            {pizza.ingredients.map((ingredients, index) => {
              return <li className="fw-light">{ingredients}</li>;
            })}
          </p>
          <p>{pizza.desc}</p>
        </div>
      </div>
      <div className="d-flex justify-content-center mb-4">
        <button>Añadir al carrito</button>
      </div>
    </div>
  );
};

export default Pizza;