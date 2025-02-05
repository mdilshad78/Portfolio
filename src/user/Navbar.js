import React from 'react'
import img from '../images/my.jpg'
import '../Css/header.css'
import '../js/home.js'
import { useRef } from 'react'

export default function Navbar() {
    const con = useRef();
    const icon=useRef();
    function btn() {
        // con.current.style.marginLeft = '100px'
        // icon.current.style.className="fa-solid fa-x"
    }
    return (
        <div>
            {/* header */}
            <header ref={con} id="header" class="header dark-background d-flex flex-column" >
                {/* <i class=" d-xl-none bi bi-list"></i> */}
                <i class="header-toggle d-xl-none bi bi-list fa-solid fa-bars" ref={icon} onClick={btn}></i>

                <div>
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

            </header>
            {/* header */}
        </div>
    )
}
