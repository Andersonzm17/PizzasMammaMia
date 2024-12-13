import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Oops! La página que buscas no existe.</p>
      <Link to="/" className="not-found-link">
        Volver a la página de inicio
      </Link>
    </div>
  );
};

export default NotFound;
