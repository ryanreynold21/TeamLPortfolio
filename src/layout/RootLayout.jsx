import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Navbar from './Navbar'
import Footer from './Footer'
// import Footer from './Footer'

const RootLayout = ({children}) => {
  const [sidebarOpen,setSidebarOpen] = useState(true)
  let x = window.matchMedia("(max-width: 700px)")

  // useEffect(() => {
  //   if (x.matches) {
  //     setSidebarOpen(false)
  //   }
  // },[])

   useEffect(() => {
     const handleWindowResize = () => {
       const isMobile = window.matchMedia("(max-width: 700px)").matches;
       setSidebarOpen(!isMobile);
     };

     handleWindowResize(); // Set initial state on component mount
     window.addEventListener("resize", handleWindowResize);

     return () => {
       window.removeEventListener("resize", handleWindowResize);
     };
   }, []);
  return (
    <>

        {sidebarOpen && <Sidebar /> }
      <div className=" md:ml-[120px] overflow-hidden">
        <Navbar setSidebarOpen={setSidebarOpen} sidebarOpen={sidebarOpen}/>
        {children}
      </div>
      <Footer/>
    </>
  )
}

export default RootLayout
