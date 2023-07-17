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
        <ScrollSpy>
            <div className="" id='home'>
                <Home />
            </div>
            <div className="" id='about'>
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
  )
}

export default Test
