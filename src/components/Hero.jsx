import React from 'react'
import assets from '../assets/assets.js'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <div className="min-h-max flex items-center justify-center mt-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">

          {/* Left Content */}
          <div className="flex-1 text-center lg:text-left">
            {/* Welcome Badge */}
            <div className="inline-flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-4 py-2 mb-8">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-slate-400 font-medium">Available for work</span>
            </div>

            {/* Main Heading */}
            {/* Main Heading with Profile Picture */}
            <div className="mb-8 flex flex-col lg:flex-row items-center gap-8 justify-center lg:justify-start">
              {/* Profile Picture - Large and prominent */}
              <link rel="preload" as="image" href={assets.ProfilePic} />

              <div className="lg:order-2 lg:ml-8 relative">
                {/* Blurred placeholder */}
                <div className="absolute inset-0 bg-slate-800/30 backdrop-blur-sm rounded-3xl animate-pulse"></div>

                <img
                  className="w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl object-cover object-center border-4 border-slate-800/50 shadow-2xl shadow-slate-900/50 opacity-0 transition-opacity duration-500"
                  src={assets.ProfilePic}
                  alt="Sidou - Full Stack Developer"
                  loading="eager" // Load immediately (critical image)
                  decoding="async"
                  onLoad={(e) => {
                    e.target.classList.remove('opacity-0');
                    e.target.classList.add('opacity-100');
                  }}
                />
              </div>

              {/* Text Content */}
              <div className="lg:order-1 text-center lg:text-left">
                <h1
                  className="min-w-max text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-slate-200 leading-tight"
                  style={{ fontFamily: 'Array, sans-serif' }}
                >
                  Hey, I'm
                  <span className="block text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text bg-gradient-to-r from-slate-300 to-slate-500 mt-2">
                    Sidou
                  </span>
                </h1>

                {/* Divider with Peace Logo */}
                <div className="flex items-center justify-center lg:justify-start gap-3 mt-6">
                  <div className="w-12 h-0.5 bg-slate-600/50"></div>
                  <img
                    className="w-10 h-10 transform hover:rotate-12 transition-transform duration-300"
                    src={assets.PeaceLogo}
                    alt="Peace"
                  />
                  <div className="w-12 h-0.5 bg-slate-600/50"></div>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-lg sm:text-xl text-slate-400 max-w-2xl leading-relaxed mb-10">
              <strong className="text-slate-300 font-semibold">21-year-old full-stack developer</strong> from Algeria,
              specializing in <span className="text-slate-300">e-commerce solutions</span> that help startups
              scale their business. Passionate about creating performant, scalable web applications.
            </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start mb-12">
              <Link
                to={'/projects'}
                className="group relative px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-900 border border-slate-700 rounded-xl text-slate-300 hover:text-slate-200 hover:border-slate-600 transition-all duration-300 flex items-center gap-3 min-w-[180px] justify-center"
              >
                <span className="text-lg font-medium" style={{ fontFamily: 'Array' }}>View Projects</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>

              <Link
                to={'/resume'}
                className="group relative px-8 py-4 bg-slate-300 text-slate-900 rounded-xl font-medium hover:bg-slate-400 transition-all duration-300 flex items-center gap-3 min-w-[180px] justify-center"
              >
                <span className="text-lg font-medium" style={{ fontFamily: 'Array' }}>Resume</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-y-0.5 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Link>
            </div>

            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start gap-6">
              <span className="text-sm text-slate-500 font-medium">Connect with me</span>
              <div className="flex gap-5 items-center">
                {[
                  {
                    href: "https://ssidouuslm@gmail.com",
                    label: "Email",
                    icon: (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    )
                  },
                  {
                    href: "https://github.com/sidouslm",
                    label: "GitHub",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
                      </svg>
                    )
                  },
                  {
                    href: "https://linkedin.com",
                    label: "LinkedIn",
                    icon: (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 1920 1920">
                        <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Z" fillRule="evenodd" />
                      </svg>
                    )
                  }
                ].map((social, index) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group p-3 bg-slate-800/30 backdrop-blur-sm border border-slate-700/50 rounded-lg text-slate-400 hover:text-slate-300 hover:border-slate-600 hover:bg-slate-800/50 transition-all duration-300 transform hover:-translate-y-0.5"
                    aria-label={social.label}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Content - Stats/Cards */}

        </div>

        {/* Scroll Indicator */}

      </div>
    </div>
  )
}

export default Hero