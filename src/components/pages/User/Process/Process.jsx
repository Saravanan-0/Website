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
    <div className='Our-Process52'>
    <div className='process-heading52'>
        <h1>Our Process</h1>
    </div>
    <div className='process-card52'>
        <div className='process152'>
        <div className='process-head52'><img src= {img1} />
        </div>
            <h3 className='fancy8'>Define user experience goals</h3>
            
        <div className='process-content52'>                          
Define the user experience goals, including user needs, pain points, and opportunities for improvement.
                </div>    
          
           </div>
        <div className='process252'>
        <div className='process-head52'><img src= {img2} />
        </div>
            <h3 className='fancy8'>Proposal and agreement</h3>
            
            <div className='process-content52'>
            Gain insights into the user's behavior, needs, and preferences. This may include user interviews, surveys, focus groups, and usability testing.
            </div>
       
        </div>
        <div className='process352'>
        <div className='process-head52'><img src= {img3} />
            </div>
            <h3 className='fancy8'>Analyze user<br/>data </h3>
            <div className='process-content52'>
            Identify patterns and insights that can inform the user experience design. 
            </div>
            </div>
        <div className='process452'>
        <div className='process-head52'><img src= {img4} />
            </div>
            <h3 className='fancy8'>Develop the design</h3>
            <div className='process-content52'>
                Develop the user experience design based on the user research and analysis.
            </div>       
        </div>
        <div className='process552'>
        <div className='process-head52'><img src= {img5} />
            </div>
            <h3 className='fancy8'>Implement the design</h3>
            <div className='process-content52'>
            Implement the user experience design across all touch points, including website, mobile apps, and other digital interfaces.
            </div>
        
        </div>
        <div className='process652'>
        <div className='process-head52'><img src= {img6} />
            </div>
            <h3 className='fancy8'>Measure and optimize</h3>
            <div className='process-content52'>
            Measure the effectiveness of the user experience design over time and optimize the design as needed.
            </div>        
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Process