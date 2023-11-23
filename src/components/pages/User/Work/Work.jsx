import React, { useState } from 'react';
// import Images from '../images/Vector.png'
import './Work.css';
import img1 from "./Images/vector.svg";
import img2 from '../../Cloud/Work/Images/1.svg';
import img3 from '../../Cloud/Work/Images/2.svg';
import img4 from './Images/3.svg';
import img5 from './Images/4.svg';
import img6 from '../../Cloud/Work/Images/5.svg';


const Work = () => {
  return (
    <div className='work513'>
      <div className='work-heading52'>
        <h1>What we do</h1>
      </div>
      <div className='work-card52'>
        <div className="work152" >
          <div className='work-head52'><img src= {img1} />
          <h2>Requirement Optimization</h2>
          </div>
          <div className="work-content52">
            <img className='head-icon1' src={img2}/>
            <p1>Refining and improving the requirements for a product, or service. The goal is to ensure that the requirements accurately reflect the needs and objectives of the stakeholders, and that they are feasible, testable, and complete.
              </p1>
            </div>
        </div>
        <div className="work152" >
          <div className='work-head52'><img src= {img4} />
          <h2>Market Analysis</h2>
          </div>
          <div className="work-content52">
            <img className='head-icon2' src={img3}/>
            <p2>Systematic investigation and study of a particular topic or problem to discover new information, gain insights, and expand knowledge.</p2>
          </div>
        </div>
        <div className="work152" >
          <div className='work-head52'><img src= {img5} />
          <h2>Competitor Analysis</h2>
          </div>
          <div className="work-content52">
            <img className='head-icon3' src={img6}/>
            <p3>Developing creative and effective solutions to design problems. The goal is to create designs that meet the needs and objectives of the stakeholders while also being aesthetically pleasing and functional. </p3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
