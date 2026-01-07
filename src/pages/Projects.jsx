import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import assets from '../assets/assets';

// Sample project data - you can replace with your actual projects
const projects = [
  {
    id: 1,
    title: "GalaxyDz E-commerce",
    description: "A full-featured e-commerce platform with modern UI/UX, cart functionality, and secure payments.",
    category: "Full Stack",
    tags: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS"],
    website: "https://e-commerce-website-1-gkb4.onrender.com/",
    githubUrl: "https://github.com/sidouslm/E-commerce-website",
    image: assets.EcommerceThumbnail
  },

];

// Category filters
const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter projects based on category and search
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950/30 pt-20 pb-10 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-slate-300 font-meduim mb-4" style={{ fontFamily: 'Array' }}>
            My Projects
          </h1>
          <p className="text-lg md:text-xl text-slate-500 max-w-3xl mx-auto">
            A collection of my recent work, showcasing skills in full-stack development, UI/UX design, and problem-solving.
          </p>
        </div>

        {/* Filters and Search */}
        <div className="mb-10">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-6">
            {/* Search Bar */}
            <div className="w-full md:w-96">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 bg-slate-900 border border-slate-800 rounded-lg text-slate-300 placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-slate-700 focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category
                      ? 'bg-slate-300 text-slate-900'
                      : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-slate-300'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Results Count */}
          <div className="text-slate-500 text-sm">
            Showing {filteredProjects.length} of {projects.length} projects
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2  gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:transform hover:-translate-y-1"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-slate-800/90 backdrop-blur-sm text-slate-300 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-300 mb-2 group-hover:text-slate-200 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-slate-800 text-slate-400 text-xs font-medium rounded"
                      >
                        {tag}
                      </span>
                    ))}
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
              </div>
            ))}
          </div>
        ) : (
          // No Projects Found
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-slate-800 rounded-full mb-6">
              <svg className="w-10 h-10 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-slate-300 mb-2">No projects found</h3>
            <p className="text-slate-500 mb-6">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSelectedCategory("All");
                setSearchQuery("");
              }}
              className="px-6 py-2 bg-slate-800 text-slate-300 rounded-lg hover:bg-slate-700 transition-colors duration-200"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-16 pt-12 border-t border-slate-800 text-center">
          <h2 className="text-2xl font-bold text-slate-300 mb-4">Have a project in mind?</h2>
          <p className="text-slate-500 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and interesting projects.
            Let's create something amazing together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="px-8 py-3 bg-slate-300 text-slate-900 font-semibold rounded-lg hover:bg-slate-400 transition-colors duration-200"
            >
              Get in Touch
            </Link>
            <a
              href="https://ssidouuslm@gmail.com"
              className="px-8 py-3 border border-slate-700 text-slate-300 font-semibold rounded-lg hover:border-slate-600 hover:text-slate-200 transition-colors duration-200"
            >
              Email Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Projects