import React from "react";
import "../../../components/home/about/about.css"
import icon1 from "../../images/icon1.svg"
import hand1 from "../../images/hand1-removebg-preview.png"
import icon2 from "../../images/icon2.svg"
import abouthead from "../../images/about-head.svg"
let About = ()=>{
    return(
        <div className="about texty" id='About'>
        <div className="heading">
           

            <img className="h1" src={abouthead}/>
            
            
           
        
            <p className="p">DigAmenD is an asset focused company. Our asset is our employees. 
              With a passionate team of designers and developers, we blend creativity
              and functionality to deliver user-centric solutions. Let us redefine your
              digital presence into the right path when it comes to the modern world.</p>
        </div>
        <div className="list">
            <div className="goals">
                <img className="icon1" src={icon1}/>
                <h2 className="h2">Our Goals</h2>
                <p className="p1">Your goal is our drive, together we create 
                 the extra-ordinary with elevating ideas that transform visions
                  to craft your success story with us </p>
           </div>
           
           <div className="hand">
                <img className="handimge" src={hand1}/>
                </div>
                
           
           <div className="vision">
           <img className="icon2" src={icon2}/>
                <h3 className="h3">Our Vision</h3>
                <p className="p2">We strive to be a trusted partner for businesses to transform  
                 through technology, by providing user centered solutions ensuring
                 client satisfaction.   </p>
                 </div>

           

        </div>
        </div>
        )
    }
    export default About