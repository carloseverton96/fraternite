import React from "react";
import { Link } from "react-router-dom";
import logofraternite from "../../public/logofraternite.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">

        {/* LOGO */}
        <div className="brand">
          <img src={logofraternite} alt="Logotipo" width={60} height="auto" />
        </div>

        {/* LINKS */}
        <ul className="nav-links">
          <li><Link to="/">Início</Link></li>
          <li><Link to="/contato">Contatos</Link></li>
        </ul>

      </div>
    </nav>
  );
}
