import React from 'react'
import { Link } from 'react-router-dom'

const Resume = () => {
  return (
    <div className='h-screen bg-slate-950/30 flex justify-center items-center px-4'>
        <div className='text-center flex flex-col justify-center w-full align-middle h-[20%]'>
            <h1 className='text-5xl sm:text-7xl md:text-9xl text-slate-600' style={{fontFamily: 'Array'}}>404 Sorry...</h1>
            <div className='w-full flex flex-col sm:flex-row  text-sm md:text-base gap-2 sm:gap-3 items-center justify-center max-w-[600px] mx-auto'>
                <p className='text-slate-700'>didn't add the resume yet</p>
                <p className='hidden sm:block text-slate-700'>|</p>
                <Link to="/" className='text-slate-700 hover:text-slate-300 stroke-slate-700 hover:stroke-slate-300 items-center flex cursor-pointer transition-colors duration-200'>
                    Home Page?
                    <svg className='w-5 h-5 sm:w-6 sm:h-6 ml-1' viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Resume