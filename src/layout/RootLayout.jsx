import React from 'react'
import Sidebar from './Sidebar'

const RootLayout = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className=" md:ml-[120px] ">
        {children}
      </div>
    </>
  )
}

export default RootLayout
