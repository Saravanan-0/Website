import React from 'react'
import './Process.css'
import img1 from './Images/1.svg';
import img2 from './Images/2.svg';
import img3 from './Images/3.svg';
import img4 from './Images/4.svg';
import img5 from './Images/5.svg';
import img6 from './Images/6.svg';

const Process = () => {
  return (<>
    <div className='Our-Process3'>
    <div className='process-heading3'>
        <h1>Our Process</h1>
    </div>
    <div className='process-card3'>
        <div className='process13'>
        <div className='process-head3'><img src= {img1} />
        </div>
            <h3 className='fancy1'>Requirements Gathering and Analysis</h3>
            
        <div className='process-content3'>
        Developers and designers work closely with stakeholders to understand the project's requirements, goals, and constraints.
                </div>    
          
           </div>
        <div className='process23'>
        <div className='process-head3'><img src= {img2} />
        </div>
            <h3 className='fancy'>Design and Prototyping</h3>
            
            <div className='process-content3'>
            Game designers and artists create the visual and interactive design of the game. Prototypes and mock ups are developed .
            </div>
       
        </div>
        <div className='process33'>
        <div className='process-head3'><img src= {img3} />
            </div>
            <h3 className='fancy'>Development</h3>
            <div className='process-content3'>
            Programmers use Unity to code the game, integrating assets and implementing the features defined in the design phase.
            </div>
            </div>
        <div className='process43'>
        <div className='process-head3'><img src= {img4} />
            </div>
            <h3 className='fancy1'>Testing and Quality Assurance</h3>
            <div className='process-content3'>
            This stage involves rigorous testing to identify and fix bugs, ensure gameplay balance, and optimize performance.
            </div>       
        </div>
        <div className='process53'>
        <div className='process-head3'><img src= {img5} />
            </div>
            <h3 className='fancy'>Deployment</h3>
            <div className='process-content3'>
            The game is prepared for release on the intended platforms. This includes final testing, platform-specific optimizations, and submission to app stores.
            </div>
        
        </div>
        <div className='process63'>
        <div className='process-head3'><img src= {img6} />
            </div>
            <h3 className='fancy'>Launch and Marketing</h3>
            <div className='process-content3'>
            The game is officially launched and promoted to the target audience. Marketing efforts aim to maximize visibility and user engagement.
            </div>        
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Process