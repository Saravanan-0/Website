import React from "react";
import "./interest.css";
import mac1 from "../../home/assets/macbook11.svg"

function Interest() {
    return (
        <div className="Interest">
            <div className="first22">
                <h1 className="head77">We turn your interest into reality !!!</h1> 
                <p className="para88">Together as a team, we unite to design and deliver projects we're passionate about</p>
            </div>
            <div className="boxes3">
                <div className="boxess1">
                    <h3 className="glimpse"> Glimpse of our making</h3>
                    <p className="pglimpse">We're excited to unveil the foundation we've laid
                     for DigAmenD, offering you a glimpse into the creative process that drives 
                     our vision and the journey that brought DigAmenD to life.</p>
                     
                </div>
                <div className="boxess2">
                    <h3 className="whatwe"> What we know</h3>
                    <p className="pwhatwe">We're the link between creativity and technology, focusing on 
                    user-centered solutions. Partner with us to stay at the cutting edge of industry trends
                     and witness our mastery in action.</p>
                     
                </div>
                <div className="boxess3">
                    <h3 className="weteach"> What we teach</h3>
                    <p className="pweteach">We unlock the art of design and development extends to sharing our 
                    knowledge from our expertise to contribute on our journey to inspire the next generation of digital pioneers.</p>
                    
                </div>
                </div>

                <div className="mac1">
                    <img width={900} className="image-mac1"src={mac1} />
                </div>
               
            </div>

    )
}
export default Interest