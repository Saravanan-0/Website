import React from 'react'
import Navbar from '../../Common/navbar/navbar'
import Cloud from './cloud/cloud'
import Work from './Work/Work'
import Process from './Process/Process'

const cloud = () => {
  return (
    <div className='consulting'> 
     
    
      <Cloud/>
      <Work/>
      <Process/>
      
    
    </div>
  )
}

export default cloud