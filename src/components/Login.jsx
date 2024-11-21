import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validaciones básicas
    if (!email || !password) {
      setMessage("Todos los campos son obligatorios.");
      return;
    }

    if (email === "usuario@example.com" && password === "123456") {
      setMessage("¡Inicio de sesión exitoso!");
    } else {
      setMessage("Credenciales incorrectas. Inténtalo de nuevo.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Inicio de Sesión</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>
        <div style={{ marginBottom: "15px" }}>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={{ width: "100%", padding: "10px", marginTop: "5px" }}
          />
        </div>
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "red",
            color: "black",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Iniciar Sesión
        </button>
      </form>
      {message && <p style={{ marginTop: "15px", color: message.includes("exitoso") ? "green" : "red" }}>{message}</p>}
    </div>
  );
};

export default Login;
