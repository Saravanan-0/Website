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
    <div className='work908'>
      <div className='work-heading89'>
        <h1>What we do</h1>
      </div>
      <div className='work-card89'>
        <div className="work189" >
          <div className='work-head89'><img src= {img1} />
          <h2>Video Editing</h2>
          </div>
          <div className="work-content89">
            <img className='head-icon1' src={img2}/>
            
            <p1>Manipulating and rearranging video footage to create a finished product which involves selecting the best shots, adding visual effects, and refining the sound and color to create a cohesive and engaging video.</p1>
          </div>
        </div>
        <div className="work189" >
          <div className='work-head89'><img src= {img4} />
          <h2>Audio Editing</h2>
          </div>
          <div className="work-content89">
            <img className='head-icon2' src={img3}/>
            
            <p2>Manipulating and refining audio recordings to create a finished product. It involves editing, mixing, and enhancing audio files to create a high-quality, cohesive sound.</p2>
          </div>
        </div>
        <div className="work189" >
          <div className='work-head89'><img src= {img5} />
          <h2>Story Board</h2>
          </div>
          <div className="work-content89">
            <img className='head-icon3' src={img6}/>
            
            <p3>A visual representation of a story or idea that is used to plan out a project, such as a film, video, animation or interactive media. </p3>
          </div>
        </div>
        <div className="work189" >
          <div className='work-head89'><img src= {img12} />
          <h2>Animation</h2>
          </div>
          <div className="work-content89">
            <img className='head-icon4' src={img7}/>
            <p4> Creating a series of still images that are rapidly sequenced together to create the illusion of movement</p4>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Work;
