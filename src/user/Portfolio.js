import React from 'react'
import '../Css/portfolio.css'
import img1 from '../images/portfolio/hostel.jpg'
import img2 from '../images/portfolio/CRUD.jpeg'
import img3 from '../images/portfolio/ecommerce.jpg'

export default function Portfolio() {
    return (
        <div>
            {/* <!-- Portfolio Section --> */}
            <section id="portfolio" class="portfolio mt-5">
                <div class="container section-title" data-aos="fade-up">
                    <div className="row">
                        <div className="col-lg-1"></div>
                        <div className="col-lg-11">
                            <h2>Portfolio</h2>
                            <p>Welcome to my portfolio, where creativity meets innovation.
                                Here, you'll find a showcase of my skills, experience, and passion projects.
                                From concept to completion, I'm excited to share my work with you.</p>
                        </div>
                    </div>
                </div>
                <div class="container">

                    <div class="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

                        <ul class="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
                            <li data-filter="*" class="filter-active">All Projects</li>
                            {/* <li data-filter=".filter-app">App</li>
                            <li data-filter=".filter-product">Product</li>
                            <li data-filter=".filter-branding">Branding</li>
                            <li data-filter=".filter-books">Books</li> */}
                        </ul>

                        <div class="row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
                            <div className="col-lg-1"></div>
                            <div className="col-lg-11">
                                <div className="row">
                                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-app mt-2">
                                        <div class="portfolio-content h-100">
                                            <img src={img1} class="img-fluid img1" alt="" />
                                            <div class="portfolio-info">
                                                <h4>Project 1</h4>
                                                <p>Hostel Facilities for Students.</p>
                                                <a href="images/portfolio/app-1.jpg" title="App 1" data-gallery="portfolio-gallery-app" class="glightbox preview-link"><i class="fa-solid fa-magnifying-glass"></i></a>
                                                <a href="https://github.com/mdilshad78/Hostel-Room-Booking.git" title="More Details" class="details-link"><i class="fa-solid fa-link"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-product mt-2">
                                        <div class="portfolio-content h-100">
                                            <img src={img2} class="img-fluid img1" alt="" />
                                            <div class="portfolio-info">
                                                <h4>Project 2</h4>
                                                <p>Prepared CRUD to Login/Logout Pages.</p>
                                                <a href="assets/img/portfolio/product-1.jpg" title="Product 1" data-gallery="portfolio-gallery-product" class="glightbox preview-link"><i class="fa-solid fa-magnifying-glass"></i></a>
                                                <a href="https://github.com/mdilshad78/CRUD.git" title="More Details" class="details-link"><i class="fa-solid fa-link"></i></a>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6 portfolio-item isotope-item filter-branding mt-2">
                                        <div class="portfolio-content h-100">
                                            <img src={img3} class="img-fluid img1" alt="" />
                                            <div class="portfolio-info">
                                                <h4>Project 3</h4>
                                                <p>E-Commerce Shopping Website </p>
                                                <a href="assets/img/portfolio/branding-1.jpg" title="Branding 1" data-gallery="portfolio-gallery-branding" class="glightbox preview-link"><i class="fa-solid fa-magnifying-glass"></i></a>
                                                <a href="portfolio-details.html" title="More Details" class="details-link"><i class="fa-solid fa-link"></i></a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* <!-- /Portfolio Section --> */}
        </div>
    )
}
