import React from "react";
import './cloud.css'
import serv2 from "../../Cloud/cloud/assets/image.svg"
import head2 from "../../Cloud/cloud/assets/cloud.svg"

 
let Cloud = ()=>{
    return(
        
        <div id="con" className="cloud">
            <div className="box177">
                <img className="devimg7" src={serv2}/>
                <div className="box-text7">
                <div className="head-main7">
                <div className="head471">Cloud</div>
                <div className="head472">Cloud</div>
               </div>
                <p className="create7">Cloud services are employed to remotely
                 host and manage data and applications, granting accessibility
                  from anywhere with an internet connection. We offer scalability,
                   cost-effectiveness, and robust security measures.</p>
                </div>
            </div>
 
        </div>
 
    )
}
export default Cloud