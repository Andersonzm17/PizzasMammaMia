import React from "react";

const Footer = () => {
  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        <p style={textStyle}>
          © 2024 - Pizzeria Mamma Mia! - Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

// Estilos CSS inline
const footerStyle = {
  backgroundColor: "#282c34",
  color: "#ffffff",
  padding: "20px 0",
  textAlign: "center",
};

const containerStyle = {
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "0 20px",
};

const textStyle = {
  margin: "0 0 10px 0",
  fontSize: "15px",
};






export default Footer;
