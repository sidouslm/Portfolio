import React from 'react'

const Skills = () => {
  return (
    <div className='px-3'>
      <hr className='w-full border-slate-700 my-5' />
      <p className='text-slate-400 text-4xl ' style={{ fontFamily: 'Array' }}>Skills</p>
      <div className="flex flex-wrap gap-3 my-8 justify-center lg:justify-start cursor-pointer">
        {['React', 'Node.js', 'MongoDB', 'Tailwind', 'Express','Python','JavaScript','Html', 'Css'].map((tech) => (
          <span
            key={tech}
            className="px-3 py-1.5 bg-slate-800/40 border border-slate-700/30 rounded-lg text-sm text-slate-400 hover:text-slate-300 hover:border-slate-600 transition-colors"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
