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
    <div className='Our-Process62'>
    <div className='process-heading62'>
        <h1>Our Process</h1>
    </div>
    <div className='process-card62'>
        <div className='process162'>
        <div className='process-head62'><img src= {img1} />
        </div>
            <h3 className='fancy10'>Research</h3>
            
        <div className='process-content62'>
        Gather information about the project, including the target audience, the brand guidelines, and the design requirements
                </div>    
          
           </div>
        <div className='process262'>
        <div className='process-head62'><img src= {img2} />
        </div>
            <h3 className='fancy10'>Concept development</h3>
            
            <div className='process-content62'>
            Brainstorm ideas for the visual content based on the research conducted in the first step
            </div>
       
        </div>
        <div className='process362'>
        <div className='process-head62'><img src= {img3} />
            </div>
            <h3 className='fancy10'>Design creation</h3>
            <div className='process-content62'>
            Create the visual content using design tools such as Adobe Illustrator or Photoshop. This involves refining the design ideas and exploring different design possibilities. 
            </div>
            </div>
        <div className='process462'>
        <div className='process-head62'><img src= {img4} />
            </div>
            <h3 className='fancy10'>Design refinement</h3>
            <div className='process-content62'>
            Develop the user experience design based on the user research and analysis.
            </div>       
        </div>
        <div className='process562'>
        <div className='process-head62'><img src= {img5} />
            </div>
            <h3 className='fancy10'>Final design</h3>
            <div className='process-content62'>
            Refine the design further by incorporating feedback from the client and 
            testing the designs
            </div>
        
        </div>
        <div className='process662'>
        <div className='process-head62'><img src= {img6} />
            </div>
            <h3 className='fancy10'>Implementation</h3>
            <div className='process-content62'>
            Create the final design based on the refined design concepts
            </div>        
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Process