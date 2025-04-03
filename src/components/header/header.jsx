import React from "react";
import "./header.css";
import Menu from "../menu/menu";
import logo from "../../assets/imagens/logo.png"

const Header = () => {
    const menuItems = [
        { label: "Início", href: "#inicio" },
        { label: "Sobre a Empresa", href: "#sobre" },
        { label: "Contato", href: "#contato" },
      ];
  return (
    <header className="header">
      <div className="container-header">
        <img src={logo} alt="Logo da Empresa" className="logo" />
        <Menu items={menuItems} />
      </div>
    </header>
  );
};

export default Header;
