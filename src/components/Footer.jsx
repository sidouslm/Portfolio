import React from 'react'

const Footer = () => {
  return (
    <div className='py-8  sm:my-10 px-4'>
      <div className='flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center max-w-4xl mx-auto'>
        <div className='text-sm sm:text-base text-slate-600'>
          <span className='hover:text-slate-300 cursor-pointer transition-colors duration-200'>2025@</span>{' '}
          <span className='hover:text-slate-300 cursor-pointer transition-colors duration-200'>SidouSlm.com</span>{' '}
          <span className='hidden sm:inline hover:text-slate-300 cursor-pointer'>|</span>
        </div>
        <div className='flex gap-5 sm:gap-4 items-center'>
          <a className='hover:fill-slate-200 fill-slate-500 transition-colors duration-200' href="https://ssidouuslm@gmail.com" aria-label="Email">
            <svg className='w-6 h-6 sm:w-7 sm:h-7' viewBox="0 0 192 192" xmlns="http://www.w3.org/2000/svg">
              <path stroke="currentColor" strokeLinejoin="round" strokeWidth="8" d="M22 57.265V142c0 5.523 4.477 10 10 10h24V95.056l40 30.278 40-30.278V152h24c5.523 0 10-4.477 10-10V57.265c0-13.233-15.15-20.746-25.684-12.736L96 81.265 47.684 44.53C37.15 36.519 22 44.032 22 57.265Z"></path>
            </svg>
          </a>
          <a className='hover:fill-slate-200 fill-slate-500 transition-colors duration-200' href="https://github.com/sidouslm" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <svg className='w-5 h-5 sm:w-6 sm:h-6' viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399"></path>
            </svg>
          </a>
          <a className='hover:fill-slate-200 fill-slate-500 transition-colors duration-200' href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <svg className='w-5 h-5 sm:w-6 sm:h-6' viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
              <path d="M1168 601.321v74.955c72.312-44.925 155.796-71.11 282.643-71.11 412.852 0 465.705 308.588 465.705 577.417v733.213L1438.991 1920v-701.261c0-117.718-42.162-140.06-120.12-140.06-74.114 0-120.12 23.423-120.12 140.06V1920l-483.604-4.204V601.32H1168Zm-687.52-.792v1318.918H0V600.53h480.48Zm-120.12 120.12H120.12v1078.678h240.24V720.65Zm687.52.792H835.267v1075.316l243.364 2.162v-580.18c0-226.427 150.51-260.18 240.24-260.18 109.55 0 240.24 45.165 240.24 260.18v580.18l237.117-2.162v-614.174c0-333.334-93.573-457.298-345.585-457.298-151.472 0-217.057 44.925-281.322 98.98l-16.696 14.173H1047.88V721.441ZM240.24 0c132.493 0 240.24 107.748 240.24 240.24 0 132.493-107.747 240.24-240.24 240.24C107.748 480.48 0 372.733 0 240.24 0 107.748 107.748 0 240.24 0Zm0 120.12c-66.186 0-120.12 53.934-120.12 120.12s53.934 120.12 120.12 120.12 120.12-53.934 120.12-120.12-53.934-120.12-120.12-120.12Z" fillRule="evenodd"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer