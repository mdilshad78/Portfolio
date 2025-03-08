import React from 'react'
import '../Css/resume.css'

export default function Resume() {
    return (
        <div>
            {/* <!-- Resume Section --> */}
            <section id="resume" class="resume section mt-5 pt-5">
                <div className="row">
                    <div className="col-lg-1"></div>
                    <div className="col-lg-11">
                        <div class="container section-title" data-aos="fade-up">
                            <h2>Resume</h2>
                            <p>Highly motivated and experienced Software Developer with a strong background in designing and delivering innovative solutions.</p>
                        </div>
                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-11">
                            <div className="row">
                                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="100">
                                    <h3 class="resume-title">Sumary</h3>

                                    <div class="resume-item pb-0">
                                        <h4>Mohammad Dilshad</h4>
                                        <p><em>Innovative and deadline-driven Graphic Designer with 3+ years of experience designing and developing user-centered digital/print marketing material from initial concept to final, polished deliverable.</em></p>
                                        <ul>
                                            <li>Kamla Nehru Colony,Jodhpur</li>
                                            <li>+91 7878722899</li>
                                            <li>mohddilshad3743@gmail.com</li>
                                        </ul>
                                    </div>

                                    <h3 class="resume-title">Education</h3>
                                    <div class="resume-item">
                                        <h4>Bachaler's of Computer Application</h4>
                                        <h5>2022 - Present</h5>
                                        <p><em>Jain Narayan Vayas University,Jodhpur,Rajasthan</em></p>
                                        <p>Pursued higher education at Jain Narayan University, a renowned institution for academic excellence.
                                            Earned a Bachaler's of computer Application in IT Feild, graduating with honors in 2025.
                                            Developed strong foundations in [Key Skills or Subjects] through rigorous coursework and research projects.</p>
                                    </div>
                                </div>

                                <div class="col-lg-6" data-aos="fade-up" data-aos-delay="200">
                                    <h3 class="resume-title">Professional Experience</h3>
                                    <div class="resume-item">
                                        <h4>MEAR Stack, Internship</h4>
                                        <h5>8/2024 - 1/2025</h5>
                                        <p><em>Tech Fly IT-Solution,Jodhpur </em></p>
                                        <ul>
                                            <li>Developed foundational skills in MongoDB, Express.js, React.js, and Node.js through intensive internship and hands-on projects.s</li>
                                            <li>Gained understanding of database design and management using MongoDB, and implemented RESTful APIs using Express.js.</li>
                                            <li>Built responsive and interactive user interfaces using React.js, and managed state changes and component lifecycle.</li>
                                            <li>Deployed full-stack MERN applications websites handles.</li>
                                        </ul>
                                    </div>
                                </div>

                                <div className="row mt-3" data-aos="fade-up" data-aos-delay="200">
                                    <div className="col-sm-4" >
                                        <div><a className='btn p-2 btn-primary p-3' href='https://drive.google.com/file/d/10lLBG_FNyB7DxC0w-5nitfQDJrFnQZGa/view?usp=sharing'>Download Resume</a></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Resume Section --> */}
        </div>
    )
}
