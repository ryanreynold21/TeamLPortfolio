import React from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
// import Footer from './Footer'

const RootLayout = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className=" md:ml-[120px]">
        <Navbar />
        {children}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout
