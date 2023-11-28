import React from 'react'
import Home from './components/pages/Development/Home'
import Homee from './components/home/homee'
import Navbar from './components/Common/navbar/navbar'
import Footer from './components/Common/Footer/footer'
import Homeee from './components/pages/Consulting/Home'
import Cloud from './components/pages/Cloud/Home'
import Creative from './components/pages/Creative/Home'
import Createnav from './components/pages/Creative/creative/Createnav/createnav'
import Masnav from './components/pages/Mason/Mason/Masnav/masnav'
import Connav from './components/pages/Consulting/consult/Connav/connav'
import Graphic from './components/pages/Graphics/Home'
import Metaverse from './components/pages/Metaverse/Home'
import Careers from './components/pages/careers/careers'

import { BrowserRouter as Router, Routes, Route }
    from 'react-router-dom';
import MasonService from './components/pages/Mason/Home'
import Develop from './components/pages/Mason/Mason/mason'
import Contact from './components/pages/Contact/contact'
import UserExp from './components/pages/User/Home'
import About1 from './components/pages/About/home'





const App = () => {
  return (
    <div className='App'>
      <Router>
      <Navbar/>
      <Routes>
        
             <Route path='/development' element={<Home/>} />
             <Route path='/cloud' element={<Cloud/>}/>
             <Route path='/creative-service' element={<Creative/>}/>
             <Route path='/consulting' element={<Homeee/>} />
             <Route path='/experience' element={<Connav/>} />
             <Route path='/createnav' element={<Createnav/>}/>
             <Route path='/masnav' element={<Masnav/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/masonservice' element={<MasonService/>}/>
             <Route path='/user-experience-enhancement' element={<UserExp/>}/>
             <Route path='/graphic-design' element={<Graphic/>}/>
             <Route path='/metaverse' element={<Metaverse/>}/>
             <Route path='/home' element={<Homee/>}/>
             <Route path='' element={<Homee/>}/>
            <Route path='/careers' element={<Careers/>}/>
            <Route path='/about1' element={<About1/>}/>

      </Routes>
      <Footer/>
      </Router>
     
     
    </div>
    

  )
}

export default App