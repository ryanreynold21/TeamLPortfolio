import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import SideBar from './Sidebar'


const RootLayout = ({children}) => {
  const [sidebarOpen,setSidebarOpen] = useState(false)
  let x = window.matchMedia("(max-width: 700px)")

  return (
    <>

        {!sidebarOpen && <SideBar /> }
      <div className=" md:ml-[120px]">
        <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
        {children}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout
