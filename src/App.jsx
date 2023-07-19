import React, { useEffect, useState } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Services from './Pages/Services'
import RootLayout from './layout/RootLayout'
import Loader from './Loader/Loader'

const App = () => {
  const [panding,setPanding] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setPanding(false)
    },2000);
  },[panding])
  return (
   <>
   {panding ? (
     <Loader />
   ) : (
      <RootLayout>
        <Home/>
        <About />
        <Services />
        <Portfolio />
        <Blog />
        <Contact />
      </RootLayout>
   )}
          
   </>
  )
}

export default App