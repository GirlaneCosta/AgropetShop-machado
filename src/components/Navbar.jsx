import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="logo.png" alt="Logo Agropet Shop Machado" />
        <h2>Agropet Shop Machado</h2>
      </div>

      <div className="hamburguer" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX /> : <FiMenu />}
      </div>

      <ul className={menuOpen ? "menu open" : "menu"}>
        <li>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>
            Serviços de Banho
          </a>
        </li>
        <li>
          <a href="#ServicosTosas" onClick={() => setMenuOpen(false)}>
            Serviços de Tosas
          </a>
        </li>
        <li>
          <a href="#Adicionais" onClick={() => setMenuOpen(false)}>
            Adicionais pet
          </a>
        </li>
        <li>
          <a href="#Produtos" onClick={() => setMenuOpen(false)}>
            Produtos para pets
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
