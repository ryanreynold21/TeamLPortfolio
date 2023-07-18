import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import {FaHouseDamage,FaRegAddressCard,FaConciergeBell,FaBriefcase,FaBlog,FaIdCardAlt} from 'react-icons/fa'
<<<<<<< HEAD
import { Link } from 'react-scroll'

=======
import { Link, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-scroll'
>>>>>>> 80139d8aebdd510950ffe6369aa1a59ee72da299

const TestSideBar = () => {
       const data = [{
        id:'1',
        to:'home',
        icon : <FaHouseDamage size={30} />,
        title: 'HOME'
       },{
        id:'2',
        to:'about',
        icon : <FaRegAddressCard size={30} />,
        title: 'ABOUT'
       },{
        id:'3',
        to:'services',
        icon : <FaConciergeBell size={30} />,
        title: 'SERVICES'
       },{
        id:'4',
        to:'portfolio',
        icon : <FaBriefcase size={30} />,
        title: 'PORTFOLIO'
       },{
        id:'5',
        to:'blog',
        icon : <FaBlog size={30} />,
        title: 'BLOG'
       },{
        id:'6',
        to:'contact',
        icon : <FaIdCardAlt size={30} />,
        title: 'CONTACT'
       },]
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
<<<<<<< HEAD
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
=======
        {/* Nav */} 
        <ul className=''>
                {data?.map((item) => (
                  <Link activeClass='active' to={item.to} smooth={true} duration={500} offset={-50}>
           <li key={item.id} className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                   {item.icon}
                   <span className=' text-[15px] tracking-wider mt-2'>{item.title}</span>
           </li>
                  </Link>
                ) )}
>>>>>>> 80139d8aebdd510950ffe6369aa1a59ee72da299
        </ul>
      </motion.div>
    </div>
  )
}

export default TestSideBar
