import React from "react";

const Profile = () => {
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="display-4 text-primary">Bienvenido a tu perfil</h1>
      <p className="lead mb-4">
        Email: <strong>pizza@mammamia.com</strong>
      </p>
      <button className="btn btn-danger">Cerrar sesión</button>
    </div>
  );
};

export default Profile;