import React from 'react'
import { motion } from 'framer-motion'
import {FaHouseDamage,FaRegAddressCard,FaConciergeBell,FaBriefcase,FaBlog,FaIdCardAlt} from 'react-icons/fa'
import { Link } from 'react-scroll'


const TestSideBar = () => {
  return (
    <div className=''> 
      <motion.div
       animate={{ x: 0 }}
       initial={{ x: "-100px" }}
      className=" w-[120px] h-screen shadow-2xl fixed left-0 bg-white z-50">
        {/* NavbarBrand */}
        <div className=" bg-[#d9832e] text-white text-[20px] font-bold text-center p-[10px]">
            <a className='' href="">Tony</a>
        </div>
        {/* Nav */}
        <ul>
                        <Link activeClass='active' to='home' smooth={true} duration={500}>
                 <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                         <FaHouseDamage className=' text-[30px]' />
                         <span className=' text-[15px] tracking-wider mt-2'>HOME</span>
                 </li>
                        </Link>

                        
                        <Link   to='about' smooth={true} duration={500}>
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>

                        <FaRegAddressCard className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>ABOUT ME</span>
                </li>
                        </Link>
                        <Link to='services' smooth={true} duration={500}>
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>

                        <FaConciergeBell className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>SERVICES</span>
                </li>
                        </Link>
                        <Link to='portfolio' smooth={true} duration={500}>
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>

                        <FaBriefcase className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>PORTFILIO</span>
                </li>
                        </Link>
                        <Link to='blog' smooth={true} duration={500}>
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>

                        <FaBlog className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>BLOG</span>
                </li>
                        </Link>
                        <Link to='contact' smooth={true} duration={500}>
                <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>

                        <FaIdCardAlt className=' text-[30px]' />
                        <span className=' text-[15px] tracking-wider mt-2'>CONTACT</span>
                </li>
                        </Link>
        </ul>
      </motion.div>
    </div>
  )
}

export default TestSideBar
