import React from 'react'

const Skills = () => {
  return (
    <div className='px-3'>
        <hr className='w-full border-slate-700 my-5'/>
        <p className='text-slate-400 text-4xl ' style={{fontFamily:'Array'}}>Skills</p>
      <div className='flex gap-3 md:w-[55%] w-full h-max my-4 flex-wrap md:max-[300px] '>
        {['React', 'Node.js', 'MongoDB', 'Express', 'CSS', 'Tailwind CSS', 'JavaScript', 'Python'].map((item,index)=>(
            <button key={index} className=' text-sm w-max py-2 px-2 rounded-xl bg-slate-800 text-slate-400 cursor-pointer hover:bg-slate-900 transition-all '>
                {item}
            </button>
        ))}
      </div>
    </div>
  )
}

export default Skills
