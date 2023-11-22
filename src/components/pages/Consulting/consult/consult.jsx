import React from "react";
import './consult.css'
import serv2 from "../../Consulting/consult/assets/image.svg"
import head2 from "../../Consulting/consult/assets/consulting.svg"

 
let Develop = ()=>{
    
    return(
        
        <div id="con" className="development">
            <div className="box2">
                <img className="devimg4" src={serv2}/>
                <div className="box-text4">
               {/* <img className="headd44" src={head2} alt="Consulting"/> */}
               <div className="head-main">
                <div className="head441">Consulting Service</div>
                <div className="head442">Consulting Service</div>
               </div>
                <p className="create4">A professional advisory service provided by UX experts to businesses or individuals seeking guidance and advice on improving the user experience for their products or services. UX consulting services covers a range of areas including user research, user interface design, user testing, usability analysis, and overall UX strategy</p>
                      </div>
            </div>
 
        </div>
 
    )
}
export default Develop