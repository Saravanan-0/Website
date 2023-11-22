import React from 'react'
import Navbar from '../../Common/navbar/navbar'
// import Connav from './consult/Connav/connav'
import Mason from './Mason/mason'
import Work from './Work/Work'
import Process from './Process/Process'

const MasonService = () => {
  return (
    <div className='consulting'> 
    <>  
      <Navbar/>
      {/* <Devnav/> */}
      <Mason/>
      <Work/>
      <Process/>
      
    </>
    </div>
  )
}

export default MasonService