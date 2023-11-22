import React from 'react'
import Navbar from '../../Common/navbar/navbar'
// import Connav from './consult/Connav/connav'
import Consult from './graphic/graphic'
import Work from './Work/Work'
import Process from './Process/Process'

const Graphic = () => {
  return (
    <div className='consulting'> 
    <>  
      <Navbar/>
      {/* <Devnav/> */}
      <Consult/>
      <Work/>
      <Process/>
      
    </>
    </div>
  )
}

export default Graphic