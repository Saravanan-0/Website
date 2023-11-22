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
    <div className='Our-Process17'>
    <div className='process-heading17'>
        <h1>Our Process</h1>
    </div>
    <div className='process-card17'>
        <div className='process117'>
        <div className='process-head17'><img src= {img1} />
        </div>
            <h3 className='fancy6'>Initial <br/>consultation</h3>
            
        <div className='process-content17'>
        Consultant meets the client to  gather information about the client's organization and identify the challenges.
                </div>    
          
           </div>
        <div className='process217'>
        <div className='process-head17'><img src= {img2} />
        </div>
            <h3 className='fancy6'>Proposal and agreement</h3>
            
            <div className='process-content17'>
            Once the consultant has a clear understanding they will provide a proposal and sign the agreement.
            </div>
       
        </div>
        <div className='process317'>
        <div className='process-head17'><img src= {img3} />
            </div>
            <h3 className='fancy6'>Research and <br/> analysis</h3>
            <div className='process-content17'>
            Conducts research and analysis to gain a deeper understanding. 
            </div>
            </div>
        <div className='process417'>
        <div className='process-head17'><img src= {img4} />
            </div>
            <h3 className='fancy6'>Recommendations and solutions</h3>
            <div className='process-content17'>
            Develop recommendations and solutions tailored to the client's specific needs.
            </div>       
        </div>
        <div className='process517'>
        <div className='process-head17'><img src= {img5} />
            </div>
            <h3 className='fancy6'>Implementation support</h3>
            <div className='process-content17'>
            Provide ongoing support and guidance to help implement the change.
            </div>
        
        </div>
        <div className='process617'>
        <div className='process-head17'><img src= {img6} />
            </div>
            <h3 className='fancy6'>Evaluation and feedback</h3>
            <div className='process-content17'>
            Provide ongoing support and guidance to help implement the change.
            </div>        
        </div>
    </div>
    </div>
    
    </>
   
  )
}

export default Process