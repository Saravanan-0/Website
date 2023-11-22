import React from "react";
import "./careers.css";
import car1 from "../careers/assets/careersimg.svg"
import mainimg from "../careers/assets/mainimg.svg"

function Careers(){
    return(
        <div id="careers" className="Careers">
            <div className="careers1">
                <img width={400} className="carr"src={car1}/>
            </div>
            <div className="car-content">
                <h2 className="car-head">Job Openings</h2>
                <p className="car-para">Temporarily our bucket is full- look for updates soon</p>
                <p className="car-para2">You can still share your profiles for future opportunities<br/>
                                          Mail us - info@digamend.com</p>
                                                    <p className="car-mail">careers@digamend.com</p>
                <div className="mainimg">
                    <img width={1100} className="cluster"src={mainimg}/>
                    </div>                                    
            </div>
        </div>
    )

}
export default Careers