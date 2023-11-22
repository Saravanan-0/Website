import React from 'react';
import"./footer.css";
import tweet from "./assests/twitter.svg"
import facebook from "./assests/Facebook.svg"
import linkedin from "./assests/Linkedin.svg"
import insta from "./assests/instagram.svg"

function Footer() {
  return (

    <div className='footer-box'>
    <div className="footer">
  
       <div className="product">
        <h3 className='lala'> Company</h3>
    
    <ul className='ul'>
       <li><a href="about11">About</a></li>
        <li><a href='careers'>Careers</a></li>
       <li><a href='contact'>Contact</a></li> 

    </ul>
    </div>

    <div className='ser'>
        <h3 className='lala'>Our Services</h3>
        <ul className='ul'>
            <li><a href='consulting'>Consulting Services </a></li>
            <li><a href='user-experience-enhancement'>User Experience Enhancement</a></li>
            <li><a href='graphic-design'>Graphic Design </a></li>
            <li><a href='creative-service'>Creative Service</a></li>
            <li><a href='development'>Development</a></li>
            <li><a href='masonservice'>Mason Service</a></li>

            </ul>

    </div>

    <div className='contact'>
        <h3 className='lala'>Contact Us</h3>
        <ul className='ul'>
           <p className='para'><b>Headquarters Address,</b><br/>
           38, Gnanandha Nagar Main Road,<br/>
           Madambakkam,<br/>
           Chennai - 600 126,
           </p>
            

            </ul>
</div>
<div className='Office'>
        <h3 className='lala'>Office Address</h3>
        <ul className='ul'>
            <p className='para'><b>8A, Tharabarathy Street, Jaya Nagar,</b><br/>
            Puzhuthivakkam,<br/>
            Chennai - 600 091.</p>
            <li><span style={{fontWeight:'bolder', color:"#000"}}>Requests -<a href="mailto:info@digamend.com">info@digamend.com</a></span></li>
            {/* <li>Sales - <a href='mailto:Sales@digamend.com'>Sales@digamend.com</a></li> */}
            <li><a href='tel:91-44-3581-4445'> +91-44-3581-4445</a>  </li>
            <li><a href='tel:91-996-222-8323'>+91-996-222-8 DAD (323)</a></li>
            <li><a href='tel:91-996-222-9323'>+91-996-222-9 DAD (323)</a></li>
            
        </ul>
       
</div>
</div>
<hr className='hr'></hr>
<div className='final-div'>
<p className='last-line'>Copyright @ 2023 DIGAMEND Technology Solutions </p>
<div className='linkicons'>
<a href="https://www.linkedin.com/company/digamend-technology-solutions">
        <img  src={linkedin} className='icon-color1'/>
      </a>
      <a href="https://www.facebook.com/people/Digamend-S/pfbid0tJgcXDSnYXvLRzmX8xbvDAR5cuimPmmRLG9vaoTRfFcRYCDWvCEsVEv6WptW52Hal/">
        <img  src={facebook}className='icon-color2' />
      </a>
      <a href="https://twitter.com/DigAmenD">
        <img  src={tweet} className='icon-color3'/>
      </a>
      <a href="https://www.instagram.com/digamend/">
      <img  src={insta} className='icon-color4'/>

      </a>
      </div>
      
</div>

</div>


  );
}

export default Footer;