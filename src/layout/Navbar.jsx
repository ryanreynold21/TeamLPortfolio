import React from 'react'

const Navbar = ({setSidebarOpen,sidebarOpen}) => {
  const handler = () => {
    console.log(sidebarOpen)
    setSidebarOpen(!sidebarOpen)
  }
  return (
    <div className=' fixed top-0 z-50 shadow-md block md:hidden'>
      <div className="flex bg-white w-screen justify-between">
        <div className=" text-[#D9832E] py-3 px-5">
            <a className=' text-[25px] font-[600]' href="/">Tony</a>
        </div>
        <div className="bg-[#D9832E] h-12 mt-2 mx-5">
          <button className=" px-2 py-3" onClick={handler}>
            <p className="w-8 h-[3px] border-b-[1px] bg-white"></p>
            <p className="w-8 h-[3px] border-b-[1px] my-2 bg-white"></p>
            <p className="w-8 h-[3px] border-b-[1px] bg-white"></p>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
