import React, { useContext } from "react";
import { Button } from "react-bootstrap";
import { format } from "../format";
import { IoCartOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
import { FaPizzaSlice } from "react-icons/fa";
import { IoIosLogIn } from "react-icons/io";
import { SiGnuprivacyguard } from "react-icons/si";
import { IoIosLogOut } from "react-icons/io";
import { Link } from "react-router-dom"; 
import { CartContext } from "../context/CartContext";

function Navbar () {
  const {totalCart} = useContext(CartContext);
  const token = true;
  return (
    <div className="d-flex justify-content-between bg-dark text-light">
      <div>
        {token ? (
          <div className="d-flex align-items-center">
          <Link to="/" className="m-1 text-decoration-none text-light">
            Pizzería Mamma Mia!
          </Link>
            <Link to="/" variant="outline-light" className="btn-sm m-1 bg-dark">
              <FaPizzaSlice />
               Home
            </Link>
            <Link to="/login" variant="outline-light" className="btn-sm m-1 bg-dark">
              <IoIosLogIn />
              Login
            </Link>
            <Link to="/register" variant="outline-light" className="btn-sm m-1 bg-dark">
              <SiGnuprivacyguard />
              Register
            </Link>
          </div>
        ) : (
          <div className="m-1 d-flex">
            <p className="m-3">Pizzería Mamma Mia!</p>
            <Link to="/" className=" btn-sm m-1 bg-dark">
              <FaPizzaSlice />
              Home
            </Link>
            <Button variant="outline-light" className="btn-sm m-1 bg-dark">
              <CgProfile />
              Profile
            </Button>
            <Button variant="outline-light" className="btn-sm m-1 bg-dark">
              <IoIosLogOut />
              Logout
            </Button>
          </div>
        )}
      </div>
      <div className="d-flex m-1">
        <Link to="/cart" className="btn-sm bg-dark">
          <IoCartOutline />
          Total: ${format(totalCart)}
        </Link>
        <Link to="/profile" className="btn btn-sm m-1 text-decoration-none bg-dark text-light border-light">
        Profile
        
        </Link>
      </div>
    </div>
  );
};

export default Navbar
