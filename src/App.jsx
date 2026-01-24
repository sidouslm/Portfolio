import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'
import Resume from './pages/Resume.jsx'
import Squares from './components/Background.jsx';




const App = () => {
  return (
    <div >
      <div className='fixed inset-0 -z-50 opacity-90 bg-black' >

        <Squares
          speed={0.5}
          squareSize={40}
          direction='diagonal' // up, down, left, right, diagonal
          borderColor='#fff'
          hoverFillColor='#fff'
        />
      </div>
      <div className='pt-5 min-w-screen md:min-w-[700px] max-w-[700px] h-max mx-auto'>

        <Navbar />

        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/resume' element={<Resume />} />

        </Routes>
      </div>


      <Footer />

    </div>

  )
}

export default App
