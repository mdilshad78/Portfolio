import React, { useState } from 'react'
import { useTypewriter } from 'react-simple-typewriter'
import main from '../images/herobg.jpg'
import '../Css/home.css'

export default function Home() {

    const [val,setVal]=useState('Mern Stack Developer','Web Developeer')
    const [text] = useTypewriter({
        words: [val],
        loop: {},
        typeSpeed: 170,
        delaySpeed: 300,
    })
    return (
        <div>
            {/* Hero Section */}
            <section id="hero" class="hero section dark-background ">

                <img src={main} alt="" data-aos="fade-in" class="" />

                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div className="row">
                        <div className="col-lg-1 col-sm-3 col-md-12"></div>
                        <div className="col-lg-11 col-sm-9">
                            <h2 className='name' id='name'>Mohammad Dilshad</h2>
                            <p className='text-light' id='name'>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer">{text}</span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span><span class="typed-cursor typed-cursor--blink" aria-hidden="true"></span></p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Hero Section --> */}
        </div>
    )
}
