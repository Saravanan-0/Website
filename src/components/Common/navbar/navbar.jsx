import "./navbar.css";
import { Link } from 'react-scroll';

import { useState } from 'react';
import React from "react";
import Devnav from '../../pages/Consulting/consult/Connav/connav';
import Createnav from '../../pages/Creative/creative/Createnav/createnav'
import img1 from "../navbar/assests/logo1.svg";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";


function Navbar() {
    const [showNavbar, setShowNavbar] = useState(false);
    let [hover, setHover] = useState(false);
    const navigate = useNavigate();
    const mouseEnter = () => {
        setHover(true);
    }
    const mouseLeave = () => {
        setHover(false);
    }

    let styling = {
        backgroundImage: hover ? "linear-gradient(16deg, #ca256d 0%, #143274 100%)" : "white",
        WebkitBackgroundClip: "text",
        backgroundClip: "Text",
        color: hover ? "transparent" : "black",
    }

    const scrollToExperience = () => {
        // Use the `navigate` function to navigate to the "experience" section
        navigate('/experience');
    }

    const [showExp, setShowExp] = useState(false);

    return (
        <div className="header">
            <div>
                <img className='logo' src={img1} />
            </div>
            <div>
                <button className='nav-btn' onClick={() => setShowNavbar(!showNavbar)}>
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <ul className={showNavbar ? "navbar show" : "navbar"}>
                    {/* <li className="nrml-nav">
                    <div onClick={() => {
                            navigate('/home')
                        }}>  <Link to="/home" spy={true} smooth={true} offset={50} duration={500}>
                        HOME</Link></div>
                    </li> */}
                    <li >
                        {/* <Link to="/homeee" spy={true} smooth={true} offset={50} duration={500}>DEVELOPMENT</Link> */}
                        <div className="nrml-nav" onClick={() => {
                            navigate('/home')
                        }}><span style={{ fontWeight: "300", fontSize: 18 }}>HOME</span></div>
                    </li>
                    <li >
                        {/* <Link to="experience" spy={true} smooth={true} offset={50} duration={500}>EXPERIENCE</Link> */}
                        <div className="nrml-nav"onClick={() => setShowExp(!showExp)}><span style={{ fontWeight: "300", fontSize: 18 }}>EXPERIENCE</span></div>
                           <div  className={showExp ? "devnav11" : "showExperience"}>
                                <Devnav/>
                           </div>
                      
                    </li>
                    <li  >
                        {/* <Link to="/homeee" spy={true} smooth={true} offset={50} duration={500}>DEVELOPMENT</Link> */}
                        <div className="nrml-nav" onClick={() => {
                            navigate('/development')
                        }}><span style={{ fontWeight: "300", fontSize: 18 }}>DEVELOPMENT</span></div>
                    </li>
                    <li >
                        { /*<Link to="CLOUD" spy={true} smooth={true} offset={50} duration={500}>CLOUD</Link>*/}
                        <div  className="nrml-nav" onClick={() => {
                            navigate('/cloud')
                        }}><span style={{ fontWeight: "300", fontSize: 18 }}>CLOUD</span></div>
                    </li>
                    <li  >
                    <div className="nrml-nav" onClick={() => {
                            navigate('/metaverse')
                        }}><span style={{ fontWeight: "300", fontSize: 18 }}>METAVERSE</span></div>
                    </li>
                </ul>
            </div>
            <div className="contact-button">
                <button onMouseEnter={mouseEnter} onMouseLeave={mouseLeave} >
                
                    <div className="buttonword" onClick={() => {
                            navigate('/contact')
                        }} style={styling}>CONTACT </div>
                </button>
            </div>
        </div>
    );
}

export default Navbar;
