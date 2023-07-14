import React from 'react'
import Sidebar from './Sidebar'
// import Footer from './Footer'

const RootLayout = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className=" md:ml-[120px] ml-2">
        {children}
      </div>
      {/* <Footer /> */}
    </>
  )
}

export default RootLayout
