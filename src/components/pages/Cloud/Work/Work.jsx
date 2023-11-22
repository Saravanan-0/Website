import React, { useState } from 'react';
// import Images from '../images/Vector.png'
import './Work.css';
import img1 from './Images/Vector.svg';
import img2 from './Images/1.svg';
import img3 from './Images/2.svg';
import img4 from './Images/3.svg';
import img5 from './Images/4.svg';
import img6 from './Images/5.svg';
import img7 from './Images/6.svg';

import img12 from './Images/11.svg';

const Work = () => {
  return (
    <div className='work22'>
      <div className='work-heading22'>
        <h1>What we do</h1>
      </div>
      <div className='work-card22'>
        <div className="work122" >
          <div className='work-head22'><img  src= {img1} />
          <h2>Compute & Storage service</h2>
          </div>
          <div className="work-content22">
            <img className='head-icon1'  src={img2}/>
            
            <p1>We enable application execution and code processing, handle data storage and retrieval, and form the core of our cloud-based application deployment and data storage with AWS.</p1>
          </div>
        </div>
        <div className="work122" >
          <div className='work-head22'><img  src= {img4} />
          <h2>Database services</h2>
          </div>
          <div className="work-content22">
            
            <img className='head-icon2'  src={img3}/>
            <p2>Our services encompass managed solutions for storing and managing data, addressing diverse data storage and retrieval requirements in the cloud</p2>
          </div>
        </div>
        <div className="work122" >
          <div className='work-head22'><img  src= {img5} />
          <h2>Networking services</h2>
          </div>
          <div className="work-content22">

            <img className='head-icon3' src={img6}/>
            <p3>We specialize in building robust and reliable network architectures, enabling the establishment of secure, scalable, and isolated network environments.</p3>
          </div>
        </div>
        <div className="work122" >
          <div className='work-head221'><img src= {img12} />
          <h2>Analytics and Big data</h2>
          </div>
          <div className="work-content22">
            <img className='head-icon4'  src={img7}/>
            <p4> The company provides tools and resources for collecting, processing, analyzing, and visualizing large volumes of data. </p4>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
