import React from 'react'
import Navbar from '../../Common/navbar/navbar'

import User from './user/user'
import Work from './Work/Work'
import Process from './Process/Process'

const UserExp = () => {
  return (
    
    <div className='Homee' >
      <Navbar/>
      {/* <Devnav/> */}
      <User/>
      <Work/>
      <Process/>
      
    
    </div>
  )
}

export default UserExp