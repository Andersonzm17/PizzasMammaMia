import { useContext, useEffect, useState } from "react";
import { UserContext, } from "../context/UserContext";
const Profile = () => {
const { user, logout } = useContext(UserContext);
  return (
    <div className="container d-flex flex-column align-items-center justify-content-center vh-100 bg-light text-center">
      <h1 className="display-4 text-primary">Bienvenido a tu perfil</h1>
      {user ? (
        <p className="fs-5 text-secondary">{user.email}</p>
      ) : (
        <p>Please login to view your profile.</p>
      )}
      <button onClick={logout} className="btn btn-danger mt-3">
        Cerrar sesión
      </button>
    </div>
  );
};

export default Profile;