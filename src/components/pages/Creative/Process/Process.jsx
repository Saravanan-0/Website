import React from 'react'
import './Process.css'
import img1 from './Images/1.svg';
import img2 from './Images/2.svg';
import img3 from './Images/3.svg';
import img4 from './Images/4.svg';
import img5 from './Images/5.svg';
import img6 from './Images/6.svg';
import img7 from './Images/7.svg';
import img8 from './Images/8.svg';

const Process = () => {
  return (<>
    <div className='Our-Process25'>
    <div className='process-heading25'>
        <h1>Our Process</h1>
    </div>
    <div className='process-card25'>
        <div className='process125'>
        <div className='process-head25'><img src= {img1} />
        </div>
            <h3 className='fancy11'>Discovery</h3>
            
        <div className='process-content25'>
        Work with the client to understand their needs and goals, as well as their target audience, brand identity, and messaging. 
                </div>    
          
           </div>
        <div className='process225'>
        <div className='process-head25'><img src= {img2} />
        </div>
            <h3 className='fancy11'>Development</h3>
            
            <div className='process-content25'>
            Develop the creative assets, such as copy, images, video, and graphics. This involves using design software and other creative tools to bring the ideas to life.
            </div>
       
        </div>
        <div className='process325'>
        <div className='process-head25'><img src= {img3} />
            </div>
            <h3 className='fancy11'>Design creation</h3>
            <div className='process-content25'>
            Work with the client to implement the creative assets in various channels and media, such as print, digital, or social media. 
            </div>
            </div>
        <div className='process425'>
        <div className='process-head25'><img src= {img4} />
            </div>
            <h3 className='fancy11'>Strategy</h3>
            <div className='process-content25'>
            Develop a creative strategy that outlines the approach to be taken for the project. This includes identifying the key messaging, tone of voice, and visual style to be used.         
            </div>       
        </div>
        <div className='process525'>
        <div className='process-head25'><img src= {img5} />
            </div>
            <h3 className='fancy11'>Review and Refinement</h3>
            <div className='process-content25'>
            Work with the client to review the creative assets and make any necessary refinements.
            </div>
        
        </div>
        <div className='process625'>
        <div className='process-head25'><img src= {img6} />
            </div>
            <h3 className='fancy11'>Production</h3>
            <div className='process-content25'>
            Produce final versions of the assets for use in various channels and media. 
            </div>        
        </div>
        <div className='process725'>
        <div className='process-head25'><img src= {img7} />
            </div>
            <h3 className='fancy11'>Implementation</h3>
            <div className='process-content25'>
            Work with the client to implement the creative assets in various channels and media, such as print, digital, or social media. 
            </div>        
        </div>
        <div className='process825'>
        <div className='process-head25'><img src= {img8} />
            </div>
            <h3 className='fancy11'>Evaluation</h3>
            <div className='process-content25'>
            Evaluate the success of the project. This involves tracking metrics such as engagement, conversion rates, and brand awareness, and making adjustments as needed to optimize performance. 
            </div>        
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Process