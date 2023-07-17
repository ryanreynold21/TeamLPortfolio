import React, { useState } from 'react'
import "./App.css"
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import Portfolio from './Pages/Portfolio'
import Blog from './Pages/Blog'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Services from './Pages/Services'
import Test from './Pages/Test'

const App = () => {
  return (
   <>
     <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/about' element={ <About /> } />
      <Route path='/portfolio' element={ <Portfolio />} />
      <Route path='/service' element={ <Services />} />
      <Route path='/blog' element={ <Blog />} />
      <Route path='/contact' element={ <Contact /> } />
      // <Route path='/test' element={ <Test /> } />
     </Routes>
   </>
  )
}

export default App