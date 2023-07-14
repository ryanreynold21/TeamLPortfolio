import React from 'react'
import RootLayout from '../layout/RootLayout'
import { TypeAnimation } from 'react-type-animation'
import {BsChevronDown} from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Home = () => {
  const url = "https://tony-react.vercel.app/static/img/home-banner.jpg"
  return (
    <RootLayout>
      <section id='home' className='relative'>
              <div className="absolute block lg:hidden z-0">
                  <img src='../home-banner.jpg' className=' w-screen h-screen object-none object-center' alt="" />
              </div>
        <div className="absolute z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative">
            {/* <div className=""></div> */}
            {/* contact */}
            <div className=" flex justify-center">
              <div className=" mt-[120px] ml-10 mr-10 bg-stone-50 lg:bg-white opaci-95 opacity-90 pl-5 pb-5">
                <h1 className=' text-[#090A23] text-[16px] md:text-[18px] lg:text-[20px] font-[500] tracking-wider mt-16'>Hello there...</h1>
                <h1 className=' text-[#090A23] text-[40px] md:text-[60px] lg:text-[70px] font-[600]'>Tony Smith</h1>
                <div className=' flex items-center mb-5 text-[20px] md:text-[23px] lg:text-[25px]'>
                      <h1 className=' font-[500] mr-2'>I Am Passionate </h1>
                      <TypeAnimation
                  sequence={[
                    // Same substring at the start will only be typed once, initially
                    ' Developer',
                    1000,
                    ' Designer',
                    1000,
                  ]}
                  speed={20}
                  className=' border-b-2 border-orange-800'
                  deletionSpeed={5}
                  // style={{ fontSize: '25px' }}
                  repeat={Infinity}
                />
                </div>
                <p className=' text-[#090A23] text-[15px] lg:text-[18px] tracking-wider font-[400] mb-5'>The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.</p>
                <div className=" flex gap-5">
                  <button className=" opacity-90 transition duration-500 ease-in-out bg-[#D9832E] px-[20px] lg:px-[40px] lg:py-[15px] py-[10px] text-white text-[12px] tracking-wider hover:bg-black">
                    MY WORK
                  </button>
                  <button className=" opacity-90 transition duration-500 ease-in-out hover:bg-[#D9832E] px-[20px] lg:px-[40px] lg:py-[15px] py-[10px] text-[#D9832E] text-[16px] tracking-wider border-2 font-bold hover:text-white border-[#D9832E]">
                    HIRE ME
                  </button>
                </div>
              </div>
            </div>
            {/* image */}
            <div className=" hidden lg:block">
              <img src="https://tony-react.vercel.app/static/img/home-banner.jpg" className="object-none object-right xl:w-screen lg:h-screen" alt="" />
            </div>
          </div>
        </div>
      </section>
            <Link to={'/about'}>
              <div className=" z-50 animate-bounce  rounded-full bg-[#D9832E] absolute bottom-0 left-0 m-auto right-0 w-12 h-12 ">
                <p className='text-xl mt-4 ml-[15px] text-white'>
                  <BsChevronDown />
                </p>
              </div>
            </Link>
    </RootLayout>
  )
}

export default Home
