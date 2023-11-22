import React from "react";
import './develop.css'
import serv1 from "../../Development/developmet/assets/serv1.png"
import head1 from "../../Development/developmet/assets/devlop.svg"

 
let Develop = ()=>{
    return(
        
        <div id="dev" className="development">
            <div className="box111">
                <img className="devimg1" src={serv1}/>
                <div className="box-text11">
                <div className="head-main11">
                <div className="head411">Development</div>
                <div className="head412">Development</div>
               </div>
                <p className="create1">Creating software or applications by writing code and
                     programming languages. It involves a variety of tasks,
                     including designing the system architecture, writing and
                      testing code, debugging, and deploying the final product.</p>
                      </div>
            </div>
 
        </div>
 
    )
}
export default Develop