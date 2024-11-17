import React from 'react';
import  "./Banner.css"; 
const Header = () => {
  return (
    <div className="header">
      <div className="background-overlay"></div>
      <div className="header-content">
        <h1>¡Pizzeria Mamma Mia!</h1>
        <p>¡Tenemos las mejores pizzas que podras encontrar!</p>
      </div>
    </div>
  )
}

export default Header;
