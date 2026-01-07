import React, { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [isClosing, setIsClosing] = useState(false)

  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [sidebarOpen])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleCloseSidebar = () => {
    setIsClosing(true)
    setTimeout(() => {
      setSidebarOpen(false)
      setIsClosing(false)
    }, 300)
  }

  return (
    <div className='fixed top-0 lg:w-[55%] w-full z-30'>
      {/* Desktop Navigation */}
      <div className={`${isScrolled ? 'bg-slate-900/20 backdrop-blur-xs' : 'bg-slate-900/0'} w-full py-5 px-2 items-center gap-3 rounded-b-2xl font-semibold hidden md:flex transition-colors duration-1000 linear`}>
        <NavLink to={'/'} className='text-sm text-slate-500 tracking-tight hover:text-slate-400 transition-all'>Home</NavLink>
        <NavLink to={'/projects'} className='text-sm text-slate-500 tracking-tight hover:text-slate-400 transition-all'>Projects</NavLink>
        <NavLink to={'/contact'} className='text-sm text-slate-500 tracking-tight hover:text-slate-400 transition-all'>Contact</NavLink>
      </div>
      
      {/* Mobile Hamburger Menu Button */}
      <div className={`${isScrolled ? 'bg-slate-900/20 backdrop-blur-xs' : 'bg-slate-900/0'} w-full items-center gap-3 rounded-b-2xl font-semibold flex md:hidden transition-colors duration-1000 linear`}>
        <button 
          onClick={() => setSidebarOpen(true)} 
          className='p-5 cursor-pointer group'
          aria-label="Open menu"
        >
          <div className='relative w-9 h-9 flex items-center justify-center'>
            <span className={`absolute w-6 h-0.5 bg-slate-500 rounded-full transition-all duration-300 ${sidebarOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-slate-500 rounded-full transition-all duration-300 ${sidebarOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`absolute w-6 h-0.5 bg-slate-500 rounded-full transition-all duration-300 ${sidebarOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Mobile Sidebar Overlay */}
      {(sidebarOpen || isClosing) && (
        <div className="fixed inset-0 z-50">
          {/* Animated Overlay */}
          <div 
            className={`absolute inset-0 bg-black transition-opacity duration-300 ${
              sidebarOpen && !isClosing ? 'opacity-50' : 'opacity-0'
            }`}
            onClick={handleCloseSidebar}
          />
          
          {/* Sidebar Content */}
          <div
            className={`absolute top-0 right-0 bottom-0 h-screen bg-slate-900/95 backdrop-blur-sm transition-all duration-300 ease-out ${
              sidebarOpen && !isClosing ? 'translate-x-0' : 'translate-x-full'
            }`}
            style={{ width: 'min(85vw, 400px)' }}
          >
            <div className="w-full h-full p-6 flex flex-col">
              {/* Header with Close Button */}
              <div className="flex items-center justify-between mb-12 pt-4">
                <h2 className="text-2xl font-medium text-slate-300" style={{ fontFamily: 'Array' }}>
                  Menu
                </h2>
                <button
                  onClick={handleCloseSidebar}
                  className='p-3 rounded-lg bg-slate-800/50 text-slate-400 hover:bg-slate-800 hover:text-slate-300 transition-all duration-200 group'
                  aria-label="Close menu"
                >
                  <div className='relative w-6 h-6'>
                    <span className='absolute top-1/2 left-1/2 w-4 h-0.5 bg-current rounded-full transform -translate-x-1/2 -translate-y-1/2 rotate-45'></span>
                    <span className='absolute top-1/2 left-1/2 w-4 h-0.5 bg-current rounded-full transform -translate-x-1/2 -translate-y-1/2 -rotate-45'></span>
                  </div>
                </button>
              </div>

              {/* Navigation Links */}
              <div className='space-y-3 flex-1'>
                {[
                  { to: '/', label: 'Home' },
                  { to: '/projects', label: 'Projects' },
                  { to: '/contact', label: 'Contact' },
                  { to: '/resume', label: 'Resume' }
                ].map((item, index) => (
                  <NavLink
                    key={item.to}
                    onClick={handleCloseSidebar}
                    className={({ isActive }) => `
                      block relative overflow-hidden rounded-xl transition-all duration-300
                      ${isActive 
                        ? 'bg-slate-800/60 text-slate-200 border-l-4 border-slate-400' 
                        : 'text-slate-400 hover:bg-slate-800/40 hover:text-slate-300'
                      }
                    `}
                    to={item.to}
                    style={{
                      animationDelay: `${index * 50}ms`,
                      animation: sidebarOpen && !isClosing 
                        ? 'slideInRight 0.4s ease-out forwards' 
                        : 'none',
                      opacity: sidebarOpen && !isClosing ? 0 : 1
                    }}
                  >
                    <div className="py-5 px-6 flex items-center">
                      <span className="text-lg font-medium tracking-wide">{item.label}</span>
                      <svg 
                        className={`ml-auto w-5 h-5 transform transition-transform duration-200 ${
                          item.label === 'Contact' ? 'text-slate-400' : 'text-slate-500'
                        }`}
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </NavLink>
                ))}
              </div>

              {/* Footer with Social Links */}
              <div className="pt-8 border-t border-slate-800">
                <p className="text-sm text-slate-500 mb-4">Connect with me</p>
                <div className="flex space-x-3">
                  <a
                    href="https://github.com/sidouslm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-slate-800/50 text-slate-400 rounded-lg hover:bg-slate-800 hover:text-slate-300 transition-all duration-200"
                    aria-label="GitHub"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"></path>
                    </svg>
                  </a>
                  <a
                    href="mailto:ssidouuslm@gmail.com"
                    className="p-3 bg-slate-800/50 text-slate-400 rounded-lg hover:bg-slate-800 hover:text-slate-300 transition-all duration-200"
                    aria-label="Email"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Animation styles */}
      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  )
}

export default Navbar