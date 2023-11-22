import React, { useState } from 'react';
// import Images from '../images/Vector.png'
import './Work.css';
import img1 from './Images/Vector.png';
import img2 from '../../Cloud/Work/Images/1.svg';
import img3 from '../../Cloud/Work/Images/2.svg';
import img4 from './Images/3.png';
import img5 from './Images/4.png';
import img6 from '../../Cloud/Work/Images/5.svg';


const Work = () => {
  return (
    <div className='work111'>
      <div className='work-heading1'>
        <h1>What we do</h1>
      </div>
      <div className='work-card1'>
        <div className="work11" >
          <div className='work-head1'><img src= {img1} />
          <h2>Full Stack Developer</h2>
          </div>
          <div className="work-content1">
            <img className='head-icon1' src={img2}/>
            
            <p>Our Developers create and manage complete web applications, handling both front-end user interfaces and back-end server logic.</p>
          </div>
        </div>
        <div className="work11" >
          <div className='work-head1'><img src= {img4} />
          <h2>Azure cloud architect</h2>
          </div>
          <div className="work-content1">
            <img className='head-icon2' src={img3}/>
            
            <p>We design and implement scalable and reliable solutions using Microsoft's cloud platform to meet business and technical requirements.</p>
          </div>
        </div>
        <div className="work11" >
          <div className='work-head1'><img src= {img5} />
          <h2>.Net developer</h2>
          </div>
          <div className="work-content1">
            <img className='head-icon3' src={img6}/>
            <p>A .NET developer creates software applications and solutions using Microsoft's .NET framework and associated technologies.</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
