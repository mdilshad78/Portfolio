import React, { useState } from 'react'
import img from '../images/my.jpg'
import '../Css/header.css'
import '../js/home.js'
import { useRef } from 'react'

export default function Navbar() {
    const header1 = useRef();
    const icon = useRef()
    const [val, setVal] = useState(0)
    function btn() {
        if (val == 0) {
            header1.current.style.visibility = "visible"
            header1.current.style.transition = "5s"
            header1.current.style.transitionDelay = "0.3s"
            icon.current.style.className = "fa-solid fa-x"
            setVal(1)
        }
        else {
            header1.current.style.visibility = "hidden"
            header1.current.style.transition = "0.5s"
            icon.current.style.className = ""
            setVal(0)
        }
    }
    return (
        <div>
            {/* header */}
            <div className="header">
                <i className="icon fa-solid fa-bars icon" id='btn' ref={icon} onClick={btn}></i>
                <div className='header1 dark-background' ref={header1}>
                    <div class="profile-img">
                        <img src={img} alt="" class="img-fluid rounded-circle" />
                    </div>

                    <a href="" class="logo d-flex align-items-center justify-content-center">
                        <h1 class="sitename">Mohammad Dilshad</h1>
                    </a>

                    <div class="social-links text-center">
                        <a href="#" class="twitter"><i class="fa-brands fa-x-twitter"></i></a>
                        <a href="https://www.facebook.com/share/15q72mxf2j/" class="facebook text-light"><i class="fa-brands fa-facebook"></i></a>
                        <a href="https://www.instagram.com/cricketer_dilshad?igsh=MTF3Ynl2bHkweWMxag==" class="instagram text-light"><i class="fa-brands fa-instagram"></i></a>
                        <a href="www.linkedin.com/in/mohammad-dilshad-2b1706267" class="google-plus"><i class="fa-brands fa-linkedin"></i></a>
                        <a href="https://github.com/mdilshad78" class="linkedin"><i class="fa-brands fa-github"></i></a>
                    </div>

                    <nav id="navmenu" class="navmenu">
                        <ul>
                            <li><a href="#hero" class="active"><i class="fa-solid fa-house navicon"></i><span className='mt-2 ms-2'>Home</span></a></li>
                            <li><a href="#about"><i class="fa-regular fa-user navicon"></i><span>About</span> </a></li>
                            <li><a href="#resume"><i class="fa-regular fa-file navicon"></i> Resume</a></li>
                            <li><a href="#portfolio"><i class="fa-regular fa-image navicon"></i> Portfolio</a></li>
                            <li><a href="#contact"><i class="fa-regular fa-address-book navicon"></i> Contact</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
            {/* header */}
        </div>
    )
}
