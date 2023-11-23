import React, { useState } from 'react';
// import Images from '../images/Vector.png'
import './Work.css';
import img1 from './Images/vector.svg';
import img2 from '../../Cloud/Work/Images/1.svg';
import img3 from '../../Cloud/Work/Images/2.svg';
import img4 from './Images/3.svg';
import img5 from './Images/4.svg';
import img6 from '../../Cloud/Work/Images/5.svg';



const Work = () => {
  return (
    <div className='work312'>
      <div className='work-heading3'>
        <h1>What we do</h1>
      </div>
      <div className='work-card3'>
        <div className="work13" >
          <div className='work-head3'><img src= {img1} />
          <h2>Unity XR Developer</h2>
          </div>
          <div className="work-content3">
            <img className='head-icon1' src={img2}/>
            <p1>Creating extended reality (XR) experiences, including VR and AR applications, using Unity's platform.
              </p1>
            </div>
        </div>
        <div className="work13" >
          <div className='work-head3'><img src= {img4} />
          <h2>Unity AI Developer</h2>
          </div>
          <div className="work-content3">
            <img className='head-icon2' src={img3}/>
            <p2>Implementing artificial intelligence solutions within games, making non-player characters (NPCs) smarter and enhancing gameplay.</p2>
          </div>
        </div>
        <div className="work13" >
          <div className='work-head344'><img src= {img5} />
          <h2>Unity Mobile Game Developer</h2>
          </div>
          <div className="work-content3">
            <img className='head-icon3' src={img6}/>
            <p3>Crafting mobile game experiences, optimizing performance and user interfaces for iOS and Android devices</p3>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
