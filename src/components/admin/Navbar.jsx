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
            Usuarios
          </Link>
        </li>
        <li>
          <Link to="add-product">
            <FaFacebook />
            Publicar
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
