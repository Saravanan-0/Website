import React, { useState } from 'react';
// import Images from '../images/Vector.png'
import './Work.css';
import img1 from './Images/Vector.svg';
import img2 from '../../Cloud/Work/Images/1.svg';
import img3 from '../../Cloud/Work/Images/2.svg';
import img4 from './Images/3.svg';
import img5 from './Images/4.svg';
import img6 from '../../Cloud/Work/Images/5.svg';



const Work = () => {
  return (
    <div className='work62'>
      <div className='work-heading62'>
        <h1>What we do</h1>
      </div>
      <div className='work-card62'>
        <div className="work162" >
          <div className='work-head62'><img src= {img1} />
          <h2>Brand Creation</h2>
          </div>
          <div className="work-content62">
            <img className='head-icon1' src={img2}/>
            <p1>Developing a unique and recognizable brand identity for a business or product.</p1>
          </div>
        </div>
        <div className="work162" >
          <div className='work-head62'><img src= {img4} />
          <h2>Print / Layout Design</h2>
          </div>
          <div className="work-content62">
            <img className='head-icon2' src={img3}/>
            <p2>Designing the visual layout of printed materials, such as brochures, flyers, posters, business cards, and magazines.</p2>
          </div>
        </div>
        <div className="work162" >
          <div className='work-head62'><img src= {img5} />
          <h2>Visual Design</h2>
          </div>
          <div className="work-content62">
            <img className='head-icon3' src={img6}/>
            <p3>Creating visual elements that are used to communicate a message or idea. </p3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
