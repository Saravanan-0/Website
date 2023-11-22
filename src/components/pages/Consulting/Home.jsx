import React from 'react'
import Navbar from '../../Common/navbar/navbar'
// import Connav from './consult/Connav/connav'
import Consult from './consult/consult'
import Work from './Work/Work'
import Process from './Process/Process'

const Home = () => {
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

export default Home