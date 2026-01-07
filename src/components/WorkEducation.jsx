import React, { use, useEffect, useState } from 'react'
import TextType from './TextAnimation.jsx'
import assets from '../assets/assets.js'


const WorkEducation = () => {

  const [isClicked, setIsClicked] = useState('Education')



  return (
    <div>
      <div className='p-4 max-w-4xl mx-auto'>
        <div className='w-full flex p-0.5 px-1 text-slate-500 font-semibold mt-10 text-lg  bg-slate-800 py-1 rounded-md '>
          <button onClick={() => setIsClicked('Work')} className={`flex-1 ${isClicked === 'Work' ? 'bg-slate-950 text-slate-200' : ''} transition-all ease-in-out cursor-pointer py-2 rounded-lg`}>Work</button>
          <button onClick={() => setIsClicked('Education')} className={`flex-1 ${isClicked === 'Education' ? 'bg-slate-950 text-slate-200' : ''}  transition-all ease-in-out cursor-pointer py-2 rounded-lg`}>Education</button>
        </div>
        <div className='w-full h-max mt-3 rounded-2xl bg-slate-800 p-[1.5px] max-w-3xl mx-auto'>
          {
            isClicked === 'Work' && (
              <>
                <div className='bg-slate-950 w-full h-full rounded-2xl p-3 md:p-4 pr-4 md:pr-7 max-w-full overflow-hidden' style={{

                }}>
                  <div>
                    
                    <div className='w-full max-h-max p-0.5  flex gap-2 md:gap-3 mb-2'>
                    <div>
                      <ul className='w-max h-max flex flex-col-reverse pt-4  justify-end items-center'>

                        <li className='w-px h-20 md:h-25 bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 1.8s 1 ',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'khad'
                        }}></li>
                        <li className='w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 1.3s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'khad'
                        }}></li>
                        <li className='w-px h-24 md:h-29 bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 0.9s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'Array'
                        }}></li>
                        <li className='w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 0.5s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'Array'
                        }}></li>
                        <li className='w-[1px] h-28 md:h-34 bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 0.2s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'Array'
                        }}></li>
                        <li className='w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 0s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'Array'
                        }}>

                        </li>
                      </ul>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <ol>
                        <li>
                          <p className='text-[10px] xs:text-xxs sm:text-xs md:text-sm text-slate-500 font-light mt-3' style={{
                          animation: 'fadeIn 0.3s ease-in 0s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>2022 - 2023</p>
                          <p className='text-xs sm:text-sm md:text-base text-slate-400 font-semibold mt-1' style={{
                          animation: 'fadeIn 0.3s ease-in 0s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>FrontEnd-Dev</p>
                          <p className='text-[10px] xs:text-xxs sm:text-xs md:text-sm text-slate-600 font-semibold mb-1' style={{
                          animation: 'fadeIn 0.3s ease-in 0s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>Specialized in creating responsive and interactive user interfaces</p>
                          <ol className='list-disc pl-4 md:pl-5 text-slate-500 text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold'>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 0.3s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>Used HTML, CSS, and JavaScript frameworks like <span className='text-blue-950 text-xs sm:text-sm md:text-base' style={{fontFamily:'Array'}}>React</span></li>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 0.4s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>Optimized <span className='text-blue-950 text-xs sm:text-sm md:text-base' style={{fontFamily:'Array'}}>performance</span> and ensured <span className='text-blue-950 text-xs sm:text-sm md:text-base' style={{fontFamily:'Array'}}>cross-browser compatibility</span></li>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 0.5s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>Contributed to improved <span className='text-blue-950 text-xs sm:text-sm md:text-base' style={{fontFamily:'Array'}}>user engagement</span> and satisfaction</li>
                          </ol>
                        </li>
                        <li>
                          <p className='text-[10px] xs:text-xxs sm:text-xs md:text-sm text-slate-500 font-light mt-3' style={{
                          animation: 'fadeIn 0.3s ease-in 0.6s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>2023 - 2024</p>
                          <p className='text-xs sm:text-sm md:text-base text-slate-400 font-semibold mt-1' style={{
                          animation: 'fadeIn 0.3s ease-in 0.6s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>FullStack Dev</p>
                          <p className='text-[10px] xs:text-xxs sm:text-xs md:text-sm text-slate-600 font-semibold mb-1' style={{
                          animation: 'fadeIn 0.3s ease-in 0.6s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>Built full-stack apps with React and Node.js</p>
                          <ol className='list-disc pl-4 md:pl-5 text-slate-500 text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold'>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 0.9s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>Integrated <span className='text-blue-950 text-xs sm:text-sm md:text-base' style={{fontFamily:'Array'}}>MongoDB</span> for secure data handling</li>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 1.0s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>Collaborated on <span className='text-blue-950 text-xs sm:text-sm md:text-base' style={{fontFamily:'Array'}}>scalable team solutions</span></li>
                          </ol>
                        </li>
                        <li>
                          <p className='text-[10px] xs:text-xxs sm:text-xs md:text-sm text-slate-500 font-light mt-3' style={{
                          animation: 'fadeIn 0.3s ease-in 1.2s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>2024 - 2025</p>
                          <p className='text-xs sm:text-sm md:text-base text-slate-400 font-semibold mt-1' style={{
                          animation: 'fadeIn 0.3s ease-in 1.2s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>Freelancing</p>
                          <p className='text-[10px] xs:text-xxs sm:text-xs md:text-sm text-slate-600 font-semibold mb-1' style={{
                          animation: 'fadeIn 0.3s ease-in 1.2s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>Strated working on freelancing jobs with satified clients</p>
                          <ol className='list-disc pl-4 md:pl-5 text-slate-500 text-[10px] xs:text-xs sm:text-sm md:text-base font-semibold'>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 1.5s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>helped many by following my passion for developping e-commerce websites for startups that helped them find <span className='text-blue-950 text-xs sm:text-sm md:text-base'  style={{fontFamily:'Array'}}>serious clients</span></li>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 1.6s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>done currently working on meny projects ( <span className='text-blue-950 text-xs sm:text-sm md:text-base'  style={{fontFamily:'Array'}}>not just ecommerce websites </span> ) <span className='text-slate-950 text-base'  style={{fontFamily:'Array'}}> </span></li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                    </div>

                  </div>

                </div>
              </>
            )
          }
          {
            isClicked === 'Education' && (
              <>
                <div className='bg-slate-950 w-full h-full rounded-2xl p-3 md:p-4 pr-4 md:pr-7 max-w-full overflow-hidden' style={{

                }}>
                  <div>
                    
                    <div className='w-full max-h-max p-0.5  flex gap-2 md:gap-3 mb-2'>
                    <div>
                      <ul className='w-max h-max flex flex-col-reverse pt-4  justify-end items-center'>

                        <li className='w-px h-16 md:h-20 bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 1.3s 1 ',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'khad'
                        }}></li>
                        <li className='w-4 h-4 md:w-5 md:h-5 rounded-full bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 0.8s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'khad'
                        }}></li>
                        <li className='w-px h-32 md:h-37 bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 0.4s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'Array'
                        }}></li>
                        <li className='w-7 h-7 md:w-10 md:h-10 rounded-full bg-slate-700 ' style={{
                          animation: 'fadeIn 0.3s ease-in 0s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                          fontFamily: 'Array'
                        }}>
                          <img src={assets.socodeLogo}  className='rounded-full' alt="" srcset="" />
                        </li>
                      </ul>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <ol>
                        <li>
                          <p className='text-[10px] xs:text-xs md:text-sm text-slate-500 font-light mt-3' style={{
                          animation: 'fadeIn 0.3s ease-in 0s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>2023 - 2024</p>
                          <p className='text-sm md:text-lg text-slate-400 font-semibold mt-1' style={{
                          animation: 'fadeIn 0.3s ease-in 0.3s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>SoCode Programming School</p>
                          <p className='text-[10px] xs:text-xs md:text-sm text-slate-600 font-semibold mb-1' style={{
                          animation: 'fadeIn 0.3s ease-in 0.6s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>Studied <strong className='text-blue-950 text-xs md:text-base' style={{fontFamily:'Array'}}>front-end</strong> and <strong className='text-blue-950 text-xs md:text-base' style={{fontFamily:'Array'}}>back-end</strong> development at SoCode Programming School</p>
                          <ol className='list-disc pl-4 md:pl-5 text-slate-500 text-[10px] xs:text-xs md:text-sm font-semibold'>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 0.9s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>After hard work and with help from teachers, I obtained my <strong className='text-blue-950 text-xs md:text-base' style={{fontFamily:'Array'}}>diploma</strong> as a front-end developer in Dec-2023</li>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 1.2s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>Continued studying the back-end part because I wanted to become a <strong className='text-blue-950 text-xs md:text-base' style={{fontFamily:'Array'}}>full-stack developer</strong>; I also obtained my diploma from there in Dec-2024</li>
                          </ol>
                        </li>
                        <li>
                          <p className='text-[10px] xs:text-xs md:text-sm text-slate-500 font-light mt-3' style={{
                          animation: 'fadeIn 0.3s ease-in 1.2s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>2025</p>
                          <p className='text-sm md:text-lg text-slate-400 font-semibold mt-1' style={{
                          animation: 'fadeIn 0.3s ease-in 1.2s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>Learning</p>
                          <p className='text-[10px] xs:text-xs md:text-sm text-slate-600 font-semibold mb-1' style={{
                          animation: 'fadeIn 0.3s ease-in 1.2s 1',
                          opacity: 0,
                          animationFillMode: 'forwards',
                        }}>A new <strong className='text-blue-950 text-xs md:text-base' style={{fontFamily:'Array'}}>learning</strong> journey</p>
                          <ol className='list-disc pl-4 md:pl-5 text-slate-500 text-[10px] xs:text-xs md:text-sm font-semibold'>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 1.5s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>After graduating, I continued learning and practicing by creating new <strong className='text-blue-950 text-xs md:text-base' style={{fontFamily:'Array'}}>projects</strong></li>
                            <li style={{
                              animation: 'fadeIn 0.3s ease-in 1.6s 1',
                              opacity: 0,
                              animationFillMode: 'forwards',
                            }}>and started my journey in the <strong className='text-blue-950 text-xs md:text-base' style={{fontFamily:'Array'}}>freelancing</strong> domain, confidently implementing my <strong className='text-blue-950 text-xs md:text-base' style={{fontFamily:'Array'}}>skills</strong></li>
                          </ol>
                        </li>
                      </ol>
                    </div>
                    </div>

                  </div>

                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default WorkEducation