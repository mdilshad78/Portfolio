import React, { useEffect } from 'react'
import AOS from 'aos'
import '../index.css'

import Navbar from './Navbar'
import Home from './Home'
import About from './About'
import Resume from './Resume'
import Portfolio from './Portfolio'
import Contact from './Contact'




export default function Main() {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    })
    return (
        <>
            <Navbar />
            <Home />
            <About />
            <Resume />
            <Portfolio/>
            <Contact/>
        </>
    )
}
