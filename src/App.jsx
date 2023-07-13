import React, { useState } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Portfolio from './Pages/Portfolio'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'

const App = () => {
  return (
   <>
     <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/service' element={ <Services /> } />
      <Route path='/portfolio' element={ <Portfolio />} />
      <Route path='/blog' element={ <Blog />} />
      <Route path='/contact' element={ <Contact /> } />
     </Routes>
   </>
  )
}

export default App