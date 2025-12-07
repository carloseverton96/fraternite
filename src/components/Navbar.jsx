import React from "react";
import { Link } from "react-router-dom";
import logofraternite from "../../public/logofraternite.jpeg";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        
        {/* LOGO E MARCA */}
        <div className="brand-container">
          <img 
            src={logofraternite} 
            alt="Logotipo Fraternité - Periódico Espírita" 
            width={60} 
            height="auto" 
            className="brand-logo"
          />
          
        </div>
<div className="brand-text">
            PERIÓDICO ESPÍRITA FRATERNITÉ
          </div>
        {/* LINKS DE NAVEGAÇÃO */}
        <ul className="nav-links">
          <li>
            <Link to="/" className="nav-link">
              Início
            </Link>
          </li>
          <li>
            <Link to="/edicoes" className="nav-link">
              Edições
            </Link>
          </li>
          <li>
            <Link to="/contatos" className="nav-link">
              Contatos
            </Link>
          </li>
          <li>
            <Link to="/eventos" className="nav-link">
              Eventos
            </Link>
          </li>
        </ul>

      </div>
    </nav>
  );
}