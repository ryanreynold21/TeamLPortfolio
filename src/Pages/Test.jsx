import React from 'react'
import Home from './Home'
import About from './About'
import Blog from './Blog'
import Contact from './Contact'
import Portfolio from './Portfolio'
import Services from './Services'
import ScrollSpy from 'react-ui-scrollspy'
import TestSideBar from '../layout/TestSideBar'

const Test = () => {
  return (
    <div>
        <TestSideBar />
        <ScrollSpy>
            <div className=" z-50" id='home'>
                <Home />
            </div>
            <div className=" mt-1000px" id='about'>
                <About />
            </div>
            <div className="" id='service'>
                <Services />
            </div>
            <div className="" id='portfolio'>
                <Portfolio />
            </div>
            <div className="" id='blog'>
                <Blog />
            </div>
            <div className="" id='contact'>
                <Contact />
            </div>
           </ScrollSpy>
    </div>
  )
}

export default Test
