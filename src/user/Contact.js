import React from 'react'
import '../Css/contact.css'

export default function Contact() {
    return (
        <div>
            {/* <!-- Contact Section --> */}
            <section id="contact" class="contact section mt-5">
                <div class="container section-title" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-11">
                            <h2>Contact</h2>
                            <p>Get Touch</p>

                        </div>
                    </div>
                </div>

                <div class="container" data-aos="fade-up" data-aos-delay="100">
                    <div class="row gy-4">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-11">
                            <div className="row">
                                <div class="col-lg-5 mt-2">

                                    <div class="info-wrap">
                                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="200">
                                            <i class="fa-solid fa-location-dot"></i>
                                            <div>
                                                <h3>Address</h3>
                                                <p>Kamla Nehru Colony,Jodhpur,Rajasthan</p>
                                            </div>
                                        </div>

                                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="300">
                                            <i class="fa-solid fa-phone"></i>
                                            <div>
                                                <h3>Call Us</h3>
                                                <p>+91 7878722899</p>
                                            </div>
                                        </div>

                                        <div class="info-item d-flex" data-aos="fade-up" data-aos-delay="400">
                                            <i class="fa-regular fa-envelope"></i>
                                            <div>
                                                <h3>Email Us</h3>
                                                <p>mohddilshad3743@gmail.com</p>
                                            </div>
                                        </div>

                                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d48389.78314118045!2d-74.006138!3d40.710059!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a22a3bda30d%3A0xb89d1fe6bc499443!2sDowntown%20Conference%20Center!5e0!3m2!1sen!2sus!4v1676961268712!5m2!1sen!2sus" class='map' frameborder="0" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                                    </div>
                                </div>

                                <div class="col-lg-7 mt-2">
                                    <form action="" method="post" class="form" data-aos="fade-up" data-aos-delay="200">
                                        <div class="row gy-4">

                                            <div class="col-md-6">
                                                <label for="name-field" class="pb-2">Your Name</label>
                                                <input type="text" name="name" id="name-field" class="form-control" required="" />
                                            </div>

                                            <div class="col-md-6">
                                                <label for="email-field" class="pb-2">Your Email</label>
                                                <input type="email" class="form-control" name="email" id="email-field" required="" />
                                            </div>

                                            <div class="col-md-12">
                                                <label for="subject-field" class="pb-2">Subject</label>
                                                <input type="text" class="form-control" name="subject" id="subject-field" required="" />
                                            </div>

                                            <div class="col-md-12">
                                                <label for="message-field" class="pb-2">Message</label>
                                                <textarea class="form-control" name="message" rows="10" id="message-field" required=""></textarea>
                                            </div>

                                            <div class="col-md-12 text-center">
                                                {/* <div class="loading">Loading</div>
                                                <div class="error-message"></div>
                                                <div class="sent-message">Your message has been sent. Thank you!</div> */}

                                                <button type="submit">Send Message</button>
                                            </div>

                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Contact Section --> */}
        </div>
    )
}
