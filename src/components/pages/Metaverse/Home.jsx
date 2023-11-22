import React from 'react'


import Metaverse from '../Metaverse/metaverse/meta'
import Work from './Work/Work'
import Process from './Process/Process'

const metaverse = () => {
  return (
    
    <div className='Homee' >
      {/* <Navbar/> */}
      {/* <Devnav/> */}
      <Metaverse/>
      <Work/>
      <Process/>
      
    
    </div>
  )
}

export default metaverse