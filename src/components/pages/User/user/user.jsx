import React from "react";
import './user.css'
import serv1 from "../user/assets/serv1.svg"
import head1 from "../user/assets/devlop.svg"

 
let User = ()=>{
    return(
        
        <div className="user">
            <div className="box5">
                <img className="devimg18" src={serv1}/>
                <div className="box-text18">
                <div className="head-main18">
                <div className="head188">User Experience Enhancement</div>
                <div className="head199">User Experience Enhancement</div>
               </div>
                <p className="create18">Range of strategies and techniques, such as improving
                 the navigation and layout of a website or application, simplifying complex 
                 tasks, optimizing load times, or providing more personalized experiences. The 
                 goal of user experience enhancement is to create a positive, memorable, and effective 
                 user experience that meets the needs and expectations of users</p>
                      </div>
            </div>
 
        </div>
 
    )
}
export default User