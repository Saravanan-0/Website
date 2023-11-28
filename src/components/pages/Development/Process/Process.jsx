import React from 'react'
import './Process.css'
import img1 from './Images/1.png';
import img2 from './Images/2.png';
import img3 from './Images/3.png';
import img4 from './Images/4.png';
import img5 from './Images/5.png';
import img6 from './Images/6.png';

const Process = () => {
  return (<>
    <div className='Our-Process1'>
    <div className='process-heading1'>
        <h1>Our Process</h1>
    </div>
    <div className='process-card1'>
        <div className='process11'>
        <div className='process-head1'><img className='Iconhover' src= {img1} />
        </div>
            <h3>Planning</h3>
            
        <div className='process-content1'>
        Gather information about the project, including the target
                audience, the brand guidelines, and the design requirements
                </div>    
          
           </div>
        <div className='process21'>
        <div className='process-head1'><img className='Iconhover' src= {img2} />
        </div>
            <h3>Design</h3>
            
            <div className='process-content1'>
            Brainstorm ideas for the visual content based on the research
                conducted in the first step
            </div>
       
        </div>
        <div className='process31'>
        <div className='process-head1'><img className='Iconhover' src= {img3} />
            </div>
            <h3 className='deck'>Development</h3>
            <div className='process-content1'>
            Create the visual content using design tools such as Adobe Illustrator or Photoshop. This involves refining the design
                ideas and exploring different design possibilities.
            </div>
            </div>
        <div className='process41'>
        <div className='process-head1'><img className='Iconhover' src= {img4} />
            </div>
            <h3>Testing</h3>
            <div className='process-content1'>
                Develop the user experience design based on the user research and analysis.
            </div>       
        </div>
        <div className='process51'>
        <div className='process-head1'><img className='Iconhover' src= {img5} />
            </div>
            <h3>Deployment</h3>
            <div className='process-content1'>
            Refine the design further by incorporating feedback from the
                client and testing the designs
            </div>
        
        </div>
        <div className='process61'>
        <div className='process-head1'><img className='Iconhover' src= {img6} />
            </div>
            <h3>Initial consultation</h3>
            <div className='process-content1'>
            Consultant meets the client to gather information about the
                client's organization and identify the challenges.
            </div>        
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Process