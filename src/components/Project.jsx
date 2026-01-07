import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets.js'

const Project = () => {
  const videoRefs = useRef([]);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "GalaxyDz",
      description: "A modern e-commerce platform with secure payment integration and user-friendly interface. Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      thumbnail: assets.EcommerceThumbnail,
      video: assets.EcommerceVideo,
      skills: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Tailwind CSS'],
      website: "https://e-commerce-website-1-gkb4.onrender.com/",
      category: "E-commerce"
    },

    
  ];

  const handleMouseEnter = (index) => {
    setHoveredProject(index);
    if (videoRefs.current[index]) {
      videoRefs.current[index].play().catch(e => console.log("Autoplay prevented:", e));
    }
  };

  const handleMouseLeave = (index) => {
    setHoveredProject(null);
    if (videoRefs.current[index]) {
      videoRefs.current[index].pause();
      videoRefs.current[index].currentTime = 0;
    }
  };

  return (
    <div className='mt-12'>
      {/* Header */}
      <div className='w-full flex flex-wrap items-center justify-between p-4 max-w-6xl mx-auto'>
        <div>
          <p className='text-4xl text-slate-400' style={{fontFamily:'Array'}}>Latest Projects</p>
          <p className='text-sm text-slate-500 mt-2 max-w-2xl'>
            Explore my recent work featuring modern web technologies and innovative solutions
          </p>
        </div>
        <Link 
          to={'/projects'} 
          className='group flex items-center gap-1 text-sm text-slate-600 hover:text-slate-300 transition-all duration-300 mt-2'
        >
          <span>discover more</span>
          <svg 
            className='w-4 transition-all group-hover:translate-x-1' 
            viewBox="0 0 24 24" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path 
              d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" 
              stroke="currentColor" 
              strokeWidth="1.5" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
      
      {/* Filter Tabs */}
      
      
      {/* Projects Grid - Now shows 4 projects */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mt-2 w-full max-w-6xl mx-auto'>
        {projects.map((project, index) => (
          <div 
            key={project.id}
            className='p-5 flex flex-col border-slate-800 border-2 rounded-xl min-h-[420px] w-full bg-gradient-to-br from-slate-900/50 to-slate-900/30 hover:border-slate-700 transition-all duration-300 hover:shadow-xl hover:shadow-slate-900/20'
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {/* Category Badge */}
            <div className='flex justify-between items-start mb-3'>
              <span className='text-xs px-3 py-1 rounded-full bg-slate-800 text-slate-400 border border-slate-700'>
                {project.category}
              </span>
              {hoveredProject === index && (
                <span className='text-xs px-2 py-1 rounded bg-blue-500/20 text-blue-300 animate-pulse'>
                  Live Preview
                </span>
              )}
            </div>

            {/* Video/Image Container */}
            <div 
              className='w-full aspect-video mt-1 rounded-lg relative group cursor-pointer overflow-hidden'
            >
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent z-10 opacity-50' />
              <img 
                src={project.thumbnail} 
                alt={`${project.title} thumbnail`}
                className='w-full h-full object-cover rounded-lg transition-all duration-500 group-hover:scale-105'
              />
              <video 
                ref={el => videoRefs.current[index] = el}
                src={project.video}
                className='absolute inset-0 w-full h-full object-cover rounded-lg opacity-0 transition-all duration-500 group-hover:opacity-100'
                muted
                loop
                preload="metadata"
                playsInline
              />
            </div>

            {/* Project Title and Description */}
            <div className='mt-4'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl text-slate-300 font-semibold'>{project.title}</h3>
                <span className='text-xs text-slate-500'>
                  #{String(project.id).padStart(2, '0')}
                </span>
              </div>
              <p className='text-sm text-slate-500 mt-2 leading-relaxed'>
                {project.description}
              </p>
            </div>

            {/* Tech Stack */}
            <div className='mt-4'>
              <p className='text-xs text-slate-600 mb-2'>TECHNOLOGIES USED</p>
              <div className='flex flex-wrap gap-2'>
                {project.skills.map((skill, idx) => (
                  <span 
                    key={idx}
                    className={`px-3 py-1 bg-slate-800 text-slate-400 rounded text-xs font-semibold transition-all duration-200`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className='mt-6 flex items-center justify-between'>
              <a 
                href={project.website}
                target='_blank'
                rel='noopener noreferrer'
                className='flex items-center gap-2 py-2 px-4 text-sm rounded-lg bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-slate-200 transition-all duration-300 border border-slate-700 hover:border-slate-600'
              >
                <svg 
                  className='w-4' 
                  fill="currentColor" 
                  viewBox="0 0 32 32" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16 2C8.3 2 2 8.3 2 16s6.3 14 14 14 14-6.3 14-14S23.7 2 16 2zm-1.5 24.9c-3.7-.5-6.6-3.6-6.6-7.4 0-.6.1-1.2.2-1.8l4.4 2.9v1c0 1.1.9 2 2 2v1.3zm6.9-2.5c-.3-.8-1-1.4-1.9-1.4h-1v-3c0-.6-.4-1-1-1h-3v-2h2c.6 0 1-.4 1-1v-2h2c1.1 0 2-.9 2-2v-.4c2.8 1.2 4.8 4 4.8 7.4 0 2.1-.8 4-2.1 5.4z"/>
                </svg>
                <span>Visit Website</span>
              </a>
              
            
            </div>
          </div>
        ))}
      </div>

      {/* Stats Bar */}
      <div className='mt-8 p-4 max-w-6xl mx-auto'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
          {[
            { label: 'Projects', value: '12+' },
            { label: 'Clients', value: '8+' },
            { label: 'Technologies', value: '8+' },
            { label: 'Experience', value: '3y+' },
          ].map((stat, idx) => (
            <div 
              key={idx}
              className='p-4 text-center border border-slate-800 rounded-lg bg-slate-900/30'
            >
              <div className='text-2xl font-bold text-slate-300'>{stat.value}</div>
              <div className='text-sm text-slate-500 mt-1'>{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* View More Button */}
    </div>
  )
}

export default Project