import React from 'react'
import Navbar from '../../Common/navbar/navbar'
// import Connav from './consult/Connav/connav'
import Creative from './creative/creative'
import Work from './Work/Work'
import Process from './Process/Process'

const CreativeService = () => {
  return (
    <div className='consulting'> 
    <>  
      <Navbar/>
      {/* <Devnav/> */}
      <Creative/>
      <Work/>
      <Process/>
      
    </>
    </div>
  )
}

export default CreativeService