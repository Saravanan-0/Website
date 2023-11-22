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
    <div className='Our-Process34'>
    <div className='process-heading34'>
        <h1>Our Process</h1>
    </div>
    <div className='process-card34'>
        <div className='process134'>
        <div className='process-head34'><img src= {img1} />
        </div>
            <h3 className='fancy12'>Project identification and feasibility study</h3>
            
        <div className='process-content34'>
        Project identification and feasibility study Identifying a project that is suitable for a BOT model.
                </div>    
          
           </div>
        <div className='process234'>
        <div className='process-head34'><img src= {img2} />
        </div>
            <h3 className='fancy12'>Preparation of a concession agreement</h3>
            
            <div className='process-content34'>
            Once the feasibility study is completed, a concession agreement is prepared.
            </div>
       
        </div>
        <div className='process334'>
        <div className='process-head34'><img src= {img3} />
            </div>
            <h3 className='fancy12'>Procurement of a private partner</h3>
            <div className='process-content34'>
            Procure a private partner to finance, design, construct, and operate the project. 
            </div>
            </div>
        <div className='process434'>
        <div className='process-head34'><img src= {img4} />
            </div>
            <h3 className='fancy12'>Project financing</h3>
            <div className='process-content34'>
            Once a private partner has been selected, the project financing is arranged.
            </div>       
        </div>
        <div className='process534'>
        <div className='process-head34'><img src= {img5} />
            </div>
            <h3 className='fancy12'>Project operation and maintenance</h3>
            <div className='process-content34'>
            Once the project is constructed, it is operated and maintained by the private partner.
            </div>
        
        </div>
        <div className='process634'>
        <div className='process-head34'><img src= {img6} />
            </div>
            <h3 className='fancy12'>Transfer of ownership</h3>
            <div className='process-content34'>
            At the end of the concession period, the project is transferred back to the public sector.
            </div>        
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Process