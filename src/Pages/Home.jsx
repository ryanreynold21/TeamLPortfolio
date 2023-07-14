import React from 'react'
import RootLayout from '../layout/RootLayout'
import { TypeAnimation } from 'react-type-animation'
import {BsChevronDown} from 'react-icons/bs'

const Home = () => {
  return (
    <RootLayout>
      <section id='home' className='relative'>
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* contact */}
            <div className=" flex justify-center">
              <div className=" mt-[120px] ml-10">
                <h1 className=' text-[#090A23] text-[20px] font-[500] tracking-wider mt-16'>Hello there...</h1>
                <h1 className=' text-[#090A23] text-[70px] font-[600]'>Tony Smith</h1>
                <div className=' flex items-center mb-5'>
                      <h1 className=' text-[25px] font-[500] mr-2'>I Am Passionate </h1>
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
                  style={{ fontSize: '25px' }}
                  repeat={Infinity}
                />
                </div>
                <p className=' text-[#090A23] text-[18px] tracking-wider font-[400] mb-5'>The namics of how users interact with interactive elements within a user interface flow chart based on container proportion.</p>
                <div className=" flex gap-5">
                  <button className=" opacity-90 transition duration-500 ease-in-out bg-[#D9832E] px-[30px] py-[15px] text-white text-[16px] tracking-wider hover:bg-black">
                    MY WORK
                  </button>
                  <button className=" opacity-90 transition duration-500 ease-in-out hover:bg-[#D9832E] px-[40px] py-[15px] text-[#D9832E] text-[16px] tracking-wider border-2 font-bold hover:text-white border-[#D9832E]">
                    HIRE ME
                  </button>
                </div>
              </div>
            </div>
            {/* image */}
            <div className=" hidden lg:block">
              <img src="https://tony-react.vercel.app/static/img/home-banner.jpg" className="object-none object-right lg:w-screen lg:h-screen" alt="" />
            </div>
            <div className="animate-bounce  rounded-full bg-orange-600 absolute bottom-0 left-0 m-auto right-0 w-10 h-10 ">
              <div className='text-xl mt-3 ml-2 text-white'>
                <BsChevronDown />
              </div>
            </div>
          </div>
        </div>
      </section>
    </RootLayout>
  )
}

export default Home
