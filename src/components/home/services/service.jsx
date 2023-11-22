import React from "react";
import "../../home/services/service.css"
import img01 from "../../images/01.png"
import img02 from "../../images/02.png"
import img03 from "../../images/03.png"
import img04 from "../../images/04.png"
import besthead from "../../images/best-head.svg"


let Service = ()=>{
    return(
        <div className="services" id="Service-con">
            <div className="service0">
                <img className="h00" src={besthead}/>
                <p className="p0">At DigAmenD, we pride ourselves on delivering excellence in design and
                   development services. With a passionate and dedicated team of experts we strive to
                   ensure perfection. Experience the epitome of excellence to elevate your business identity.</p>
            </div>
            <div className="total-cont">
            <div className="contain">
            <div className="service1">
                <div className="consult">
                <h2 className="cons"  >Consulting Services</h2>
                <p className="prof">A professional advisory service provided by UX experts to businesses
                   or individuals seeking guidance and advice on improving the user experience
                   for their products or services.</p>
                   </div>
                 <div className="img11">

                    
                    <img width={300} height={170} className="image-inside" src={img01}/>

                    </div>  

            </div>
            <hr className="hr"></hr>
            <div className="contain2">
            <div className="service2">
            <div className="img21">
                  <img width={300} height={170} className="image-inside"src={img02}/>

            </div>
              
                <div className="user777">
                <h3 className="use">User Experience <br/>Enhancement</h3>
                <p className="range">Range of strategies and techniques, 
                such as improving the navigation and layout of a website or application,
                simplifying complex tasks, optimizing load times, or providing 
                more personalized experiences.</p>
                   </div>
                   </div>
                </div>
                <hr className="hr"></hr>
                <div className="contain3">
                <div className="service3">
                <div className="design">
                <h4 className="graph">Graphic Design</h4>
                <p className="elevate">Elevate your business with captivating graphics that
                 transform ideas into visual masterpiece. Explore the power of graphical design at its best.</p>
                   </div>
                 <div className="img31">

                    
                    <img width={300} height={170} className="image-inside" src={img03}/>

                    </div>  
                    </div>

           
            </div>
            <hr className="hr"></hr>
            <div className="contain4">
            <div className="service4">
            <div className="img41">
                  <img width={300} height={170} className="image-inside" src={img04}/>

            </div>  
                <div className="create">
                <h4 className="cret">Creative Services</h4>
                <p className="ran">Range of services that involve the creation of visual and
                 multimedia content for various purposes, such as marketing, advertising, 
                 branding, and communication.</p>
                   </div>
                </div>  
                </div>
                </div>
                </div>
        </div>
    )
}
export default Service
