import React from 'react'
import { Link } from 'react-router-dom'
import {FaHouseDamage,FaRegAddressCard,FaConciergeBell,FaBriefcase,FaBlog,FaIdCardAlt} from 'react-icons/fa'

const Sidebar = () => {
  return (
    <div>
      <div className=" w-[120px] h-screen fixed left-0 shadow-2xl sidebar">
        {/* NavbarBrand */}
        <div className=" bg-[#d9832e] text-white text-[20px] font-bold text-center p-[10px]">
            <a className='' href="">Tony</a>
        </div>
        {/* Nav */}
        <ul>
                <Link to={'/'}>
            <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                    <FaHouseDamage className=' text-[30px]' />
                    <span className=' text-[15px] tracking-wider mt-2'>HOME</span>
            </li>
                </Link>
                <Link to={'/about'}>
            <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                    <FaRegAddressCard className=' text-[30px]' />
                    <span className=' text-[15px] tracking-wider mt-2'>ABOUT ME</span>
            </li>
                </Link>
                <Link to={'/service'}>
            <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                    <FaConciergeBell className=' text-[30px]' />
                    <span className=' text-[15px] tracking-wider mt-2'>SERVICES</span>
            </li>
                </Link>
                <Link to={'/portfolio'}>
            <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                    <FaBriefcase className=' text-[30px]' />
                    <span className=' text-[15px] tracking-wider mt-2'>PORTFILIO</span>
            </li>
                </Link>
                <Link to={'/blog'}>
            <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                    <FaBlog className=' text-[30px]' />
                    <span className=' text-[15px] tracking-wider mt-2'>BLOG</span>
            </li>
                </Link>
                <Link to={'/contact'}>
            <li className=' text-black flex flex-col justify-center items-center py-4 hover:text-orange-500 cursor-pointer'>
                    <FaIdCardAlt className=' text-[30px]' />
                    <span className=' text-[15px] tracking-wider mt-2'>CONTACT</span>
            </li>
                </Link>
        </ul>
      </div>
    </div>
  )
}

export default Sidebar
