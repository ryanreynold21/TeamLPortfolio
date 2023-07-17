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
   <div>
    <Home />
    <about />
    <Services />
    <Portfolio />
    <Blog />
    <Contact />
   </div>
  )
}

export default App