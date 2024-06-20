import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Header.css'; 

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleClass = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="header">
      <div className="container mx-auto">
        <NavLink to="/" className="logo">
          <h1>i++ Tech Codey</h1>
        </NavLink>
        <div onClick={toggleClass} className="menu-icon md:hidden">
          <svg
            className="stroke-dark-heading dark:stroke-white"
            width="25"
            height="20"
            viewBox="0 0 16 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.4375 1.3125H14.5625M1.4375 11.3125H14.5625H1.4375ZM1.4375 6.3125H14.5625H1.4375Z"
              strokeWidth="1.875"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <nav className={`nav-links ${!isOpen ? "hidden" : ""} md:flex`}>
          <ul className="dark:text-light-content font-medium md:flex items-center md:space-x-5">
            <li>
              <NavLink to="/" onClick={toggleClass}>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" onClick={toggleClass}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/technologies" onClick={toggleClass}>
                Technologies
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={toggleClass}>
                Projects
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={toggleClass}>
                Contact
              </NavLink>
            </li>
          </ul>
          
        </nav>
      </div>
    </header>
  );
}

export default Header;
