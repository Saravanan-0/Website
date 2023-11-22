import React from 'react'
import Navbar from '../../Common/navbar/navbar'
// import Devnav from './developmet/Dev nav/devnav'
import Developmet from './developmet/develop'
import Work from './Work/Work'
import Process from './Process/Process'

const Home = () => {
  return (
    <div id='homeee'>
    <>  
      <Navbar/>
      {/* <Devnav/> */}
      <Developmet/>
      <Work/>
      <Process/>
      
    </>
    </div>
  )
}

export default Home