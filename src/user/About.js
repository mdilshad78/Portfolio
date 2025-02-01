import React from 'react'
import img1 from '../images/my-profile-img.jpg'
import '../Css/about.css'


export default function About() {
    return (
        <div>
            {/* <!-- About Section --> */}
            <section id="about" class="about section mt-5 ">

                <div class="container section-title" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <h2 className=''>About</h2>
                            <p className=''>I'm Mohammad Dilshad, a curious and driven individual with a passion for learning and growth.
                                With a unique blend of skills and experiences, I'm dedicated to making a meaningful impact.
                                I'm excited to connect and explore new opportunities together.</p>
                        </div>
                    </div>
                </div>

                <div class="container" data-aos="fade-up" data-aos-delay="100">

                    <div class="row gy-4 justify-content-center">
                        <div className="col-lg-1"></div>
                        <div class="col-lg-4">
                            <img src={img1} class="img-fluid" alt="" />
                        </div>
                        <div class="col-lg-7 content">
                            <h2>Mern Stack Developer &amp; Web Developer.</h2>
                            <p class="fst-italic py-3">
                                As a seasoned software developer, I specialize in designing and Mern Stack and delivering scalable, efficient solutions that drive business growth.
                                With expertise in [specific programming languages/technologies], I leverage my technical skills to drive innovation and excellence.
                            </p>
                            <div class="row">
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="fa-solid fa-angle-right"></i> <strong>Birthday:</strong> <span>28 May 2004</span></li>
                                        <li><i class="fa-solid fa-angle-right"></i> <strong>Website:</strong> <span>www.example.com</span></li>
                                        <li><i class="fa-solid fa-angle-right"></i> <strong>Phone:</strong> <span>+91 7878722899</span></li>
                                        <li><i class="fa-solid fa-angle-right"></i> <strong>City:</strong> <span>Jodhpur, INDIA</span></li>
                                    </ul>
                                </div>
                                <div class="col-lg-6">
                                    <ul>
                                        <li><i class="fa-solid fa-angle-right"></i> <strong>Age:</strong> <span>21</span></li>
                                        <li><i class="fa-solid fa-angle-right"></i> <strong>Degree:</strong> <span>Bachaler's of Computer Application</span></li>
                                        <li><i class="fa-solid fa-angle-right"></i> <strong>Email:</strong> <span>mohddilshad3743@gmail.com</span></li>
                                        <li><i class="fa-solid fa-angle-right"></i> <strong>Freelance:</strong> <span>Available</span></li>
                                    </ul>
                                </div>
                            </div>
                            <p class="py-3">
                                This is all my information mention in this section.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /About Section --> */}

            {/* <!-- Stats Section --> */}
            {/* <section id="about" class="stats section mt-5">
                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-11">
                            <div className="row">
                                <div class="col-lg-3 col-md-6">
                                    <div class="stats-item">
                                        <i class="fa-regular fa-face-smile"></i>
                                        <span class="purecounter">232</span>
                                        <p><strong>Happy Clients</strong> <span>consequuntur quae</span></p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <div class="stats-item">
                                        <i class="fa-solid fa-book"></i>
                                        <span class="purecounter">521</span>
                                        <p><strong>Projects</strong> <span>adipisci atque cum quia aut</span></p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <div class="stats-item">
                                        <i class="fa-solid fa-headset"></i>
                                        <span class="purecounter">1453</span>
                                        <p><strong>Hours Of Support</strong> <span>aut commodi quaerat</span></p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-md-6">
                                    <div class="stats-item">
                                        <i class="fa-regular fa-user"></i>
                                        <span class="purecounter">32</span>
                                        <p><strong>Hard Workers</strong> <span>rerum asperiores dolor</span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
            {/* <!-- /Stats Section --> */}

            {/* <!-- Skills Section --> */}
            <section id="about" class="skills mt-5">
                <div class="container section-title " data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-11">
                            <h2>Skills</h2>
                            <p>This is all my Skills.</p>
                        </div>
                    </div>
                </div>

                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="row skills-content skills-animation">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-11">
                            <div className="row">
                                <div class="col-lg-6">
                                    <div class="progress">
                                        <span class="skill"><span>HTML</span> <i class="val">100%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar1"></div>
                                        </div>
                                    </div>

                                    <div class="progress">
                                        <span class="skill"><span>CSS</span> <i class="val">90%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar2"></div>
                                        </div>
                                    </div>

                                    <div class="progress">
                                        <span class="skill"><span>JavaScript</span> <i class="val">75%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar3"></div>
                                        </div>
                                    </div>

                                    <div class="progress">
                                        <span class="skill"><span>Express Js</span> <i class="val">80%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar4"></div>
                                        </div>
                                    </div>

                                    <div class="progress">
                                        <span class="skill"><span>Node JS</span> <i class="val">85%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar5"></div>
                                        </div>
                                    </div>
                                    <div class="progress">
                                        <span class="skill"><span>mongo db</span> <i class="val">80%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar6"></div>
                                        </div>
                                    </div>

                                </div>

                                <div class="col-lg-6">

                                    <div class="progress">
                                        <span class="skill"><span>c language</span> <i class="val">90%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar7"></div>
                                        </div>
                                    </div>
                                    <div class="progress">
                                        <span class="skill"><span>cpp language</span> <i class="val">75%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar8"></div>
                                        </div>
                                    </div>
                                    <div class="progress">
                                        <span class="skill"><span>dsa</span> <i class="val">70%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar9"></div>
                                        </div>
                                    </div>
                                    <div class="progress">
                                        <span class="skill"><span>React Js</span> <i class="val">80%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar10"></div>
                                        </div>
                                    </div>
                                    <div class="progress">
                                        <span class="skill"><span>mysql</span> <i class="val">85%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar11"></div>
                                        </div>
                                    </div>

                                    <div class="progress">
                                        <span class="skill"><span>Photoshop</span> <i class="val">75%</i></span>
                                        <div class="progress-bar-wrap">
                                            <div class="progress-bar12"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Skills Section --> */}
        </div>
    )
}
