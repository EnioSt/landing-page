import React from "react";
import "./menu.css";

const Menu = ({ items }) => {
  return (
    <nav>
      <ul className="nav-menu">
        {items.map((item, index) => (
          <li key={index}>
            <a href={item.href}>{item.label}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Menu;
