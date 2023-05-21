import React from "react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AiFillFileAdd } from "react-icons/ai";

const Navbar = () => {
  return (
    <>
      <ul className="menu bg-gray-300 h-full">
        <li>
          <Link to="home">
            <FaUserCircle className="text-4xl text-primary" />
            Usuarios
          </Link>
        </li>
        <li>
          <Link to="add-product">
            <AiFillFileAdd className="text-4xl text-primary" />
            Publicar
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Navbar;
