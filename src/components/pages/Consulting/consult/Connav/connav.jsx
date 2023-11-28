import React from 'react';
import { useState } from 'react';
import './connav.css';
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
  
       <nav id= 'experience' className="devnav2">
      <ul className="dev-list2">
        
        <div className="dev-item2" onClick={() => {
                            navigate('/consulting')
                        }}>Consulting</div>
         <div className="dev-item2" onClick={() => {
                            navigate('/user-experience-enhancement')
                        }}>User Experience Enhancement</div>

<div className="dev-item2" onClick={() => {
                            navigate('/graphic-design')
                        }}>Graphic Design</div>
        <div className="dev-item2" onClick={() => {
                            navigate('/creative-service')
                        }}>Creative Service</div>

<div className="dev-item2" onClick={() => {
                            navigate('/masonservice')
                        }}>Mason Service</div>
        
       
      </ul>
    </nav>
  );
};

export default Navbar;
