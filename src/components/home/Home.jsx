import React from 'react'
import "./Home.css"
import img2 from './assets/2.png'
import img3 from './assets/3.png'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div>
        
      <div className='Home1'>  
        <div className='home1-content'>
          <h1>Crafting businesses,<br/>
for a better <span style={{color:"#CA256D"}}>future-today.</span></h1>
<p> Creating seamless digital landscapes that are intuitive,
engaging, effective and elevate businesses to modernize technology for unforgettable experiences.</p>
<div className='home-btn'>
          <button  className='home-btn1'>OUR SERVICE</button>
          <Link to='Service-con' spy={true} smooth={true} offset={-80} duration={500}>
          <button className='home-btn2'>GET STARTED</button></Link>
          
        </div>

        </div>
        
        <div className='home1-img'>
        
          <img  className='img111 img333' src={img2} />
          
          <img className='img222 img333 ' src={img3} />

        </div>
        

      </div>
    </div>
  )
}

export default Home