import React from 'react'
import img1 from '../images/my.jpg'
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
            <section id="about" class="stats section mt-5">
                <div class="container section-title" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-10">
                            <h2 className=''>Statistic</h2>
                        </div>
                    </div>
                </div>
                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="row">
                        <div className="col-lg-1"></div>
                        <div className="col-xl-11">
                            <div className="row">
                                <div class="col-lg-4 col-md-4 col-sm-12">
                                    <div class="stats-item text-center mt-4">
                                        <h3 className='fs-2'>Github Project</h3>
                                        <h4 className='fs-2'>15</h4>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-4 col-sm-12 text-center mt-4">
                                    <div class="stats-item">
                                        <h3 className='fs-2'>Github Followers</h3>
                                        <h4 className='fs-2'>60</h4>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-4 col-sm-12 text-center mt-4">
                                    <div class="stats-item">
                                        <h3 className='fs-2'>Linkdin Followers</h3>
                                        <h4 className='fs-2'>199</h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
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
                                <div class="col-lg-4 col-md-6 col-sm-12 mt-4">
                                    <div className="col-sm-12 text-center p-4 bor">
                                        <h3>FrontEnd Development</h3>
                                        <div className="row mt-4">
                                            <div className="col-sm-6">
                                                <h5 className='html p-2 text-light'>HTML</h5>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5 className='css p-2 text-light'>CSS</h5>
                                            </div>
                                            <div className="col-sm-6 mt-3">
                                                <h5 className='boot p-2 text-light'>Bootstrap</h5>
                                            </div>
                                            <div className="col-sm-6 mt-3">
                                                <h5 className='java p-2 text-light'>Javascript</h5>
                                            </div>
                                            <div className="col-sm-6 mt-3">
                                                <h5 className='react p-2 text-light'>React JS</h5>
                                            </div>
                                            {/* <div className="col-sm-4 mt-3">
                                                <h5 className='next p-2'>Next JS</h5>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 text-center mt-4">
                                    <div className="col-sm-12 text-center p-4 bor">
                                        <h3>BackEnd Development</h3>
                                        <div className="row mt-4">
                                            <div className="col-sm-6">
                                                <h5 className='react p-2 text-light'>Node JS</h5>
                                            </div>
                                            <div className="col-sm-6">
                                                <h5 className='next p-2 text-light'>ExpressJS</h5>
                                            </div>
                                            <div className="col-sm-6 mt-3">
                                                <h5 className='boot p-2 text-light'>Mongodb</h5>
                                            </div>
                                            <div className="col-sm-6 mt-3">
                                                <h5 className='java p-2 text-light'>SQL</h5>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 text-center mt-4">
                                    <div className="col-sm-12 text-center p-4 bor">
                                        <h3>Languages</h3>
                                        <div className="row mt-4">
                                            <div className="col-sm-4">
                                                <h5 className='react p-2 text-light'>C-Lan</h5>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="col-lg-4 col-md-6 text-center mt-4">
                                    <div className="col-sm-12 text-center p-4 bor">
                                        <h3>Designing</h3>
                                        <div className="row mt-4">
                                            <div className="col-sm-5">
                                                <h5 className='react p-2 text-light'>Photoshop</h5>
                                            </div>
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
