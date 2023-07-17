import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import TestSideBar from './TestSideBar'
// import Footer from './Footer'

const RootLayout = ({children}) => {
  const [sidebarOpen,setSidebarOpen] = useState(false)
  let x = window.matchMedia("(max-width: 700px)")

  return (
    <>

        {!sidebarOpen && <TestSideBar /> }
      <div className=" md:ml-[120px]">
        <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
        {children}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout
