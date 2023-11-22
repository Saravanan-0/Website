import React from 'react';
// import { useState } from 'react';
import './createnav.css';





const Navbar = () => {
  return (
  
       <nav id= 'experience' className="devnav">
      <ul className="dev-list">
        <li className="dev-item">
          <a href="consulting">Consulting Service</a>
        </li>
        <li className="dev-item">
          <a href="/user-experience-enhancement">User Experience Enhancement</a>
        </li>
        <li className="dev-item">
          <a href="/graphic-design">Graphic Design</a>
        </li>
        <li className="dev-item">
          <a href="/creative-service">Creative Service</a>
        </li>
        <li className="dev-item">
          <a href="/mason-service">Mason Service</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
