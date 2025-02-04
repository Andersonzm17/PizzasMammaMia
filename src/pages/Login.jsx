import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

const Login = () => {
  const { email, setEmail } = useContext(UserContext);
  const { password, setPassword, handleLogin } = useContext(UserContext);
  const { error } = useContext(UserContext);
  
  return (
    <div className="d-flex pt-5  flex-column align-items-center ">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        {error && <p className="text-danger">{error}</p>}
        <div
          className="p-2
        "
        >
          <label>Email:</label>
          <br />
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="p-2">
          <label>Contraseña:</label>
          <br />
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-flex justify-content-center">
          <button type="submit">Iniciar Sesión</button>
        </div>
      </form>
    </div>
  );
};

export default Login;

