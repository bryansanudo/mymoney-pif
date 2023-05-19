import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <ul className="menu bg-base-100  p-2 rounded-box  ">
        <li>
          <Link to="home">
            <FaFacebook />
            Inicio
          </Link>
        </li>
        <li>
          <Link to="all-products">
            <FaFacebook />
            Productos
          </Link>
        </li>
        <li>
          <Link to="add-product">
            <FaFacebook />
            Agregar
          </Link>
        </li>
        <li>
          <Link to="orders">
            <FaFacebook />
            Pedidos
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
