import React, { useState } from 'react';
// import Images from '../images/Vector.png'
import './Work.css';
import img1 from './Images/Vector.svg';
import img2 from '../../Cloud/Work/Images/1.svg';
import img3 from '../../Cloud/Work/Images/2.svg';
import img4 from './Images/3.svg';
import img5 from './Images/4.svg';
import img6 from '../../Cloud/Work/Images/5.svg';
import img7 from '../../Cloud/Work/Images/6.svg';

import img12 from './Images/11.svg';

const Work = () => {
  return (
    <div className='work412'>
      <div className='work-heading4'>
        <h1>What we do</h1>
      </div>
      <div className='work-card4'>
        <div className="work14" >
          <div className='work-head4'><img src= {img1} />
          <h2>Requirement Analysis</h2>
          </div>
          <div className="work-content4">
            <img className='head-icon5' src={img2}/>
            
            <p1>Gathering, Documenting, and Analyzing the requirements for a product or service.</p1>
          </div>
        </div>
        <div className="work14" >
          <div className='work-head4'><img src= {img4} />
          <h2>Market Analysis</h2>
          </div>
          <div className="work-content4">
            <img className='head-icon6' src={img3}/>
            <p2>Evaluating the market environment to identify opportunities, threats, and trends that can impact a business or industry</p2>
          </div>
        </div>
        <div className="work14" >
          <div className='work-head42'><img src= {img5} />
          <h2>Competitor Analysis</h2>
          </div>
          <div className="work-content4">
            <img className='head-icon7' src={img6}/>
            
            <p3>Evaluating the strengths and weaknesses of a business's competitors to identify opportunities and threats that can impact the business's success     </p3>
          </div>
        </div>
        <div className="work14" >
          <div className='work-head41'><img src= {img12} />
          <h2>Brand Analysis</h2>
          </div>
          <div className="work-content4">
            <img className='head-icon8' src={img7}/>
            <p4> Evaluating a brand's current position, strengths, weaknesses, opportunities, threats and gain a deeper understanding of how the brand is perceived in the market and to identify areas for improvement. </p4>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
