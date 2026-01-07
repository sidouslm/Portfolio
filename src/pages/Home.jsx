import React from 'react'
import Hero from '../components/Hero.jsx'
import WorkEducation from '../components/WorkEducation.jsx'
import Project from '../components/Project.jsx'
import Footer from '../components/Footer.jsx'
import Skills from '../components/Skills.jsx'

const Home = () => {
  return (
    <div className='pl-3'>
      <Hero/>
      <Skills/>
      <Project/>
      <WorkEducation/>
    </div>
  )
}

export default Home
