import React from 'react';
import './devnav.css';
import { useState } from 'react';
import { Link } from 'react-scroll';

function Navbar  () {
  const [showNavbar, setShowNavbar] = useState(false);
  let [hover,sethover]=useState(false);
  const navigate = useNavigate();
  const mouserenter =()=>{
      sethover(true)
  }
  const mouseleave =()=>{
      sethover(false)
  }
  return (
    <nav id='experience'className="devnav1" onClick={()=> setShowNavbar(!showNavbar)}>
      <ul className="dev-list1">
        <li className="dev-item1">
          <a href="consulting">Consulting Service</a>
        </li>
        <li className="dev-item1">
          <a href="/user-experience-enhancement">User Experience Enhancement</a>
        </li>
        <li className="dev-item1">
          <a href="/graphic-design">Graphic Design</a>
        </li>
        <li className="dev-item1">
          <a href="/creative-service">Creative Service</a>
        </li>
        <li className="dev-item1">
          <a href="/mason-service">Mason Service</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
