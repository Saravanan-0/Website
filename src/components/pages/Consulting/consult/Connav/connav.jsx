import React from 'react';
// import { useState } from 'react';
import './connav.css';

const Navbar = () => {
  return (
  
       <nav id= 'experience' className="devnav2">
      <ul className="dev-list2">
        <li className="dev-item2">
          <a href="consulting">Consulting Service</a>
        </li>
        <li className="dev-item2">
          <a href="/user-experience-enhancement">User Experience Enhancement</a>
        </li>
        <li className="dev-item2">
          <a href="/graphic-design">Graphic Design</a>
        </li>
        <li className="dev-item2">
          <a href="/creative-service">Creative Service</a>
        </li>
        <li className="dev-item2">
          <a href="/masonservice">Mason Service</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
