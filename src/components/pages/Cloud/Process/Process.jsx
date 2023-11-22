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
    <div className='Our-Process14'>
    <div className='process-heading14'>
        <h1>Our Process</h1>
    </div>
    <div className='process-card14'>
        <div className='process114'>
        <div className='process-head14'><img src= {img1} />
        </div>
            <h3 className='fancy7'>Define Requirements</h3>
            
        <div className='process-content14'>
        Our project's objectives, features, user expectations were meticulously documented for guidance and development process
                </div>    
          
           </div>
        <div className='process214'>
        <div className='process-head14'><img src= {img2} />
        </div>
            <h3 className='fancy7'>Choose AWS Services</h3>
            
            <div className='process-content14'>
            Maximizing cloud performance through strategic evaluation of aligned tools and resources for businesses.
            </div>
       
        </div>
        <div className='process314'>
        <div className='process-head14'><img src= {img3} />
            </div>
            <h3 className='fancy7'>Design Architecture</h3>
            <div className='process-content14'>
            Creating an opulent, scalable, and reliable system by harmonizing AWS services. 
            </div>
            </div>
        <div className='process414'>
        <div className='process-head14'><img src= {img4} />
            </div>
            <h3 className='fancy7'>Set Up AWS Resources</h3>
            <div className='process-content14'>
            Configure and create cloud components, including servers and databases, meeting specific needs.
            </div>       
        </div>
        <div className='process514'>
        <div className='process-head14'><img src= {img5} />
            </div>
            <h3 className='fancy7'>Develop and Deploy</h3>
            <div className='process-content14'>
            Developing, deploying, and releasing software on the cloud for luxurious internet accessibility.
            </div>
        
        </div>
        <div className='process614'>
        <div className='process-head14'><img src= {img6} />
            </div>
            <h3 className='fancy7'>Monitor and Maintain</h3>
            <div className='process-content14'>
            Continuously monitor, secure, and optimize cloud infrastructure for reliable, secure, and evolving digital services.
            </div>        
        </div>
    </div>
    </div>
    
    
    </>
  )
}

export default Process