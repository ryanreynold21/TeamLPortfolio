import React from 'react'
import Sidebar from './Sidebar'

const RootLayout = ({children}) => {
  return (
    <>
      <Sidebar />
      <div className=" md:ml-[120px] ml-2">
        {children}
      </div>
    </>
  )
}

export default RootLayout
