import React from 'react'
import css from './style.css'
import Header from './Header'
import Footer from './Footer'
import Slider from "react-slick";
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <>
            <Header />
            <div className="container-fluid px-0 mb-5">
                <div id="header-carousel" className="carousel slide pointer-event" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="w-100" src="https://themewagon.github.io/Industrio/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 text-start">
                                            <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">25 Years
                                                of Working Experience</p>
                                            <h1 className="display-1 text-white mb-5 animated slideInRight">Industrial Solution
                                                Providing Company</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img className="w-100" src="https://themewagon.github.io/Industrio/img/carousel-2.jpg" alt="Image" />
                            <div className="carousel-caption">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-lg-10 text-start">
                                            <p className="fs-5 fw-medium text-primary text-uppercase animated slideInRight">25 Years
                                                of Working Experience</p>
                                            <h1 className="display-1 text-white mb-5 animated slideInRight">The Best Reliable
                                                Industry Solution</h1>
                                            <a href="" className="btn btn-primary py-3 px-5 animated slideInRight">Explore More</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <div className="row gx-3 h-100">
                                <div className="col-6 align-self-start wow fadeInUp fade-eft" data-wow-delay="0.1s" >
                                    <img className="img-fluid" src={'https://themewagon.github.io/Industrio/img/about-1.jpg'} />
                                </div>
                                <div className="col-6 align-self-end wow fadeInDown fade-eft" data-wow-delay="0.1s">
                                    <img className="img-fluid" src={"https://themewagon.github.io/Industrio/img/about-2.jpg"} />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeIn fade-eft" data-wow-delay="0.5s" >
                            <p className="fw-medium text-uppercase text-primary mb-2">About Us</p>
                            <h1 className="display-5 mb-4">We Are Leader In Industrial Market</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="d-flex align-items-center mb-4">
                                <div className="flex-shrink-0 bg-primary p-4">
                                    <h1 className="display-2">25</h1>
                                    <h5 className="text-white">Years of</h5>
                                    <h5 className="text-white">Experience</h5>
                                </div>
                                <div className="ms-4">
                                    <p><i className="fa fa-check text-primary me-2"></i>Power &amp; Energy</p>
                                    <p><i className="fa fa-check text-primary me-2"></i>Civil Engineering</p>
                                    <p><i className="fa fa-check text-primary me-2"></i>Chemical Engineering</p>
                                    <p><i className="fa fa-check text-primary me-2"></i>Mechanical Engineering</p>
                                    <p className="mb-0"><i className="fa fa-check text-primary me-2"></i>Oil &amp; Gas Engineering</p>
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-envelope-open text-white"></i>
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-2">Email us</p>
                                            <h5 className="mb-0">info@example.com</h5>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="d-flex align-items-center">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-phone-alt text-white"></i>
                                        </div>
                                        <div className="ms-3">
                                            <p className="mb-2">Call us</p>
                                            <h5 className="mb-0">+012 345 6789</h5>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid facts my-5 p-5">
                <div className="row g-5">
                    <div className="col-md-6 col-xl-3 wow fadeIn fade-eft" data-wow-delay="0.1s" >
                        <div className="text-center border p-5">
                            <i className="fa fa-certificate fa-3x text-white mb-3"></i>
                            <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">25</h1>
                            <span className="fs-5 fw-semi-bold text-white">Years Experience</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeIn fade-eft" data-wow-delay="0.3s">
                        <div className="text-center border p-5">
                            <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
                            <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">135</h1>
                            <span className="fs-5 fw-semi-bold text-white">Team Members</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeIn fade-eft" data-wow-delay="0.5s">
                        <div className="text-center border p-5">
                            <i className="fa fa-users fa-3x text-white mb-3"></i>
                            <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">957</h1>
                            <span className="fs-5 fw-semi-bold text-white">Happy Clients</span>
                        </div>
                    </div>
                    <div className="col-md-6 col-xl-3 wow fadeIn fade-eft" data-wow-delay="0.7s">
                        <div className="text-center border p-5">
                            <i className="fa fa-check-double fa-3x text-white mb-3"></i>
                            <h1 className="display-2 text-primary mb-0" data-toggle="counter-up">1839</h1>
                            <span className="fs-5 fw-semi-bold text-white">Projects Done</span>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6 wow fadeInUp fade-eft" data-wow-delay="0.1s">
                            <div className="position-relative me-lg-4">
                                <img className="img-fluid w-100" src="https://themewagon.github.io/Industrio/img/feature.jpg" alt="" />
                                <span className="position-absolute top-50 start-100 translate-middle bg-white rounded-circle d-none d-lg-block c-dim" ></span>
                                <button type="button" className="btn-play" data-bs-toggle="modal" data-src="https://www.youtube.com/embed/DWRcNpR6Kdc" data-bs-target="#videoModal">
                                    <span></span>
                                </button>
                            </div>
                        </div>
                        <div className="col-lg-6 wow fadeInUp fade-eft" data-wow-delay="0.5s" >
                            <p className="fw-medium text-uppercase text-primary mb-2">Why Choosing Us!</p>
                            <h1 className="display-5 mb-4">Few Reasons Why People Choosing Us!</h1>
                            <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et
                                eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
                            </p>
                            <div className="row gy-4">
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <div className="ms-4">
                                            <h4>Experienced Workers</h4>
                                            <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                                dolore erat amet</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <div className="ms-4">
                                            <h4>Reliable Industrial Services</h4>
                                            <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                                dolore erat amet</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="d-flex">
                                        <div className="flex-shrink-0 btn-lg-square rounded-circle bg-primary">
                                            <i className="fa fa-check text-white"></i>
                                        </div>
                                        <div className="ms-4">
                                            <h4>24/7 Customer Support</h4>
                                            <span>Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna
                                                dolore erat amet</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto pb-4 wow fadeInUp fade-eft" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <p className="fw-medium text-uppercase text-primary mb-2">Our Services</p>
                        <h1 className="display-5 mb-4">We Provide Best Industrial Services</h1>
                    </div>
                    <div className="row gy-5 gx-4">
                        <div className="col-md-6 col-lg-4 wow fadeInUp fade-eft" data-wow-delay="0.1s">
                            <div className="service-item">
                                <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/service-1.jpg" alt="" />
                                <div className="service-img">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/service-1.jpg" alt="" />
                                </div>
                                <div className="service-detail">
                                    <div className="service-title">
                                        <hr className="w-25" />
                                        <h3 className="mb-0">Civil &amp; Gas Engineering</h3>
                                        <hr className="w-25" />
                                    </div>
                                    <div className="service-text">
                                        <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                            lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                                <a className="btn btn-light" href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp fade-eft" data-wow-delay="0.3s" >
                            <div className="service-item">
                                <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/service-2.jpg" alt="" />
                                <div className="service-img">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/service-2.jpg" alt="" />
                                </div>
                                <div className="service-detail">
                                    <div className="service-title">
                                        <hr className="w-25" />
                                        <h3 className="mb-0">Power &amp; Energy Engineering</h3>
                                        <hr className="w-25" />
                                    </div>
                                    <div className="service-text">
                                        <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                            lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                                <a className="btn btn-light" href="">Read More</a>
                            </div>
                        </div>
                        <div className="col-md-6 col-lg-4 wow fadeInUp fade-eft" data-wow-delay="0.5s" >
                            <div className="service-item">
                                <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/service-3.jpg" alt="" />
                                <div className="service-img">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/service-3.jpg" alt="" />
                                </div>
                                <div className="service-detail">
                                    <div className="service-title">
                                        <hr className="w-25" />
                                        <h3 className="mb-0">Plumbing &amp; Water Treatment</h3>
                                        <hr className="w-25" />
                                    </div>
                                    <div className="service-text">
                                        <p className="text-white mb-0">Erat ipsum justo amet duo et elitr dolor, est duo duo eos
                                            lorem sed diam stet diam sed stet.</p>
                                    </div>
                                </div>
                                <a className="btn btn-light" href="">Read More</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid bg-dark pt-5 my-5 px-0">
                <div className="text-center mx-auto mt-5 wow fadeIn fade-eft" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                    <p className="fw-medium text-uppercase text-primary mb-2">Our Projects</p>
                    <h1 className="display-5 text-white mb-5">See What We Have Completed Recently</h1>
                </div>
                <div className="owl-carousel project-carousel wow fadeIn owl-loaded owl-drag fade-eft" data-wow-delay="0.1s">

                    <div className="owl-stage-outer">
                        <div className="owl-stage pro-sty">
                            <div className="owl-item" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-1.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Auto Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-2.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Civil Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-2.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Civil Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-2.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Civil Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-2.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Civil Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item active" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-3.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Gas Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item active" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-4.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Power Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item active center" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-5.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Energy Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item active" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-6.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Water Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item cloned active" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-1.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Auto Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item cloned" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-2.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Civil Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item cloned" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-3.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Gas Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item cloned" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-4.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Power Engineering</h5>
                                    </div>
                                </a>
                            </div>
                            <div className="owl-item cloned" style={{ width: "303.84px" }}>
                                <a className="project-item" href="">
                                    <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/project-5.jpg" alt="" />
                                    <div className="project-title">
                                        <h5 className="text-primary mb-0">Energy Engineering</h5>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="owl-nav">
                        <div className="owl-prev"><i className="bi bi-chevron-left"></i></div>
                        <div className="owl-next"><i className="bi bi-chevron-right"></i></div>
                    </div>
                    <div className="owl-dots disabled"></div>
                </div>
            </div>

            <div className="container-xxl py-5">
                <div className="container">
                    <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <p className="fw-medium text-uppercase text-primary mb-2">Our Team</p>
                        <h1 className="display-5 mb-5">Dedicated Team Members</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-4 col-md-6 wow fadeInUp fade-eft" data-wow-delay="0.1s" >
                            <div className="team-item">
                                <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/team-1.jpg" alt="" />
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-square bg-primary" style={{ width: "90px", height: "90px" }}>
                                        <i className="fa fa-2x fa-share text-white"></i>
                                    </div>
                                    <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{ height: "90px" }}>
                                        <h5>Rob Miller</h5>
                                        <span className="text-primary">CEO &amp; Founder</span>
                                        <div className="team-social">
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp fade-eft" data-wow-delay="0.3s" >
                            <div className="team-item">
                                <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/team-2.jpg" alt="" />
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-square bg-primary" style={{ width: "90px", height: "90px" }}>
                                        <i className="fa fa-2x fa-share text-white"></i>
                                    </div>
                                    <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{ height: "90px" }}>
                                        <h5>Adam Crew</h5>
                                        <span className="text-primary">Project Manager</span>
                                        <div className="team-social">
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 wow fadeInUp fade-eft" data-wow-delay="0.5s" >
                            <div className="team-item">
                                <img className="img-fluid" src="https://themewagon.github.io/Industrio/img/team-3.jpg" alt="" />
                                <div className="d-flex">
                                    <div className="flex-shrink-0 btn-square bg-primary" style={{ width: "90px", height: "90px" }}>
                                        <i className="fa fa-2x fa-share text-white"></i>
                                    </div>
                                    <div className="position-relative overflow-hidden bg-light d-flex flex-column justify-content-center w-100 ps-4" style={{ height: "90px" }}>
                                        <h5>Peter Farel</h5>
                                        <span className="text-primary">Engineer</span>
                                        <div className="team-social">
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-twitter"></i></a>
                                            <a className="btn btn-square btn-dark rounded-circle mx-1" href=""><i className="fab fa-instagram"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto wow fadeInUp fade-eft" data-wow-delay="0.1s" style={{ maxWidth: "600px" }}>
                        <p class="fw-medium text-uppercase text-primary mb-2">Testimonial</p>
                        <h1 class="display-5 mb-5">What Our Clients Say!</h1>
                    </div>
                    <div class="owl-carousel testimonial-carousel wow fadeInUp owl-loaded owl-drag fade-efy" data-wow-delay="0.1s">



                        <div class="owl-stage-outer"><div class="owl-stage test1"><div class="owl-item cloned" style={{ width: "636px" }}><div class="testimonial-item text-center">
                            <div class="testimonial-img position-relative">
                                <img class=" rounded-circle mx-auto mb-5" src="https://themewagon.github.io/Industrio/img/testimonial-3.jpg" />
                                <div class="btn-square bg-primary rounded-circle">
                                    <i class="fa fa-quote-left text-white"></i>
                                </div>
                            </div>
                            <div class="testimonial-text text-center rounded p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                    ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                    clita.</p>
                                <h5 class="mb-1">Client Name</h5>
                                <span class="fst-italic">Profession</span>
                            </div>
                        </div></div><div class="owl-item cloned" style={{ width: "636px" }}><div class="testimonial-item text-center">
                            <div class="testimonial-img position-relative">
                                <img class=" rounded-circle mx-auto mb-5" src="https://themewagon.github.io/Industrio/img/testimonial-1.jpg" />
                                <div class="btn-square bg-primary rounded-circle">
                                    <i class="fa fa-quote-left text-white"></i>
                                </div>
                            </div>
                            <div class="testimonial-text text-center rounded p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                    ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                    clita.</p>
                                <h5 class="mb-1">Client Name</h5>
                                <span class="fst-italic">Profession</span>
                            </div>
                        </div></div><div class="owl-item" style={{ width: "636px" }}><div class="testimonial-item text-center">
                            <div class="testimonial-img position-relative">
                                <img class=" rounded-circle mx-auto mb-5" src="https://themewagon.github.io/Industrio/img/testimonial-3.jpg" />
                                <div class="btn-square bg-primary rounded-circle">
                                    <i class="fa fa-quote-left text-white"></i>
                                </div>
                            </div>
                            <div class="testimonial-text text-center rounded p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                    ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                    clita.</p>
                                <h5 class="mb-1">Client Name</h5>
                                <span class="fst-italic">Profession</span>
                            </div>
                        </div></div><div class="owl-item active center" style={{ width: "636px" }}><div class="testimonial-item text-center">
                            <div class="testimonial-img position-relative">
                                <img class=" rounded-circle mx-auto mb-5" src="https://themewagon.github.io/Industrio/img/testimonial-1.jpg" />
                                <div class="btn-square bg-primary rounded-circle">
                                    <i class="fa fa-quote-left text-white"></i>
                                </div>
                            </div>
                            <div class="testimonial-text text-center rounded p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                    ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                    clita.</p>
                                <h5 class="mb-1">Client Name</h5>
                                <span class="fst-italic">Profession</span>
                            </div>
                        </div></div><div class="owl-item active" style={{ width: "636px" }}><div class="testimonial-item text-center">
                            <div class="testimonial-img position-relative">
                                <img class=" rounded-circle mx-auto mb-5" src="https://themewagon.github.io/Industrio/img/testimonial-3.jpg" />
                                <div class="btn-square bg-primary rounded-circle">
                                    <i class="fa fa-quote-left text-white"></i>
                                </div>
                            </div>
                            <div class="testimonial-text text-center rounded p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                    ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                    clita.</p>
                                <h5 class="mb-1">Client Name</h5>
                                <span class="fst-italic">Profession</span>
                            </div>
                        </div></div><div class="owl-item cloned" style={{ width: "636px" }}><div class="testimonial-item text-center">
                            <div class="testimonial-img position-relative">
                                <img class=" rounded-circle mx-auto mb-5" src="https://themewagon.github.io/Industrio/img/testimonial-1.jpg" />
                                <div class="btn-square bg-primary rounded-circle">
                                    <i class="fa fa-quote-left text-white"></i>
                                </div>
                            </div>
                            <div class="testimonial-text text-center rounded p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                    ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                    clita.</p>
                                <h5 class="mb-1">Client Name</h5>
                                <span class="fst-italic">Profession</span>
                            </div>
                        </div></div><div class="owl-item cloned" style={{ width: "636px" }}><div class="testimonial-item text-center">
                            <div class="testimonial-img position-relative">
                                <img class=" rounded-circle mx-auto mb-5" src="https://themewagon.github.io/Industrio/img/testimonial-2.jpg" />
                                <div class="btn-square bg-primary rounded-circle">
                                    <i class="fa fa-quote-left text-white"></i>
                                </div>
                            </div>
                            <div class="testimonial-text text-center rounded p-4">
                                <p>Clita clita tempor justo dolor ipsum amet kasd amet duo justo duo duo labore sed sed. Magna
                                    ut diam sit et amet stet eos sed clita erat magna elitr erat sit sit erat at rebum justo sea
                                    clita.</p>
                                <h5 class="mb-1">Client Name</h5>
                                <span class="fst-italic">Profession</span>
                            </div>
                        </div></div></div></div><div class="owl-nav"><div class="owl-prev"><i class="bi bi-arrow-left"></i></div><div class="owl-next"><i class="bi bi-arrow-right"></i></div></div><div class="owl-dots disabled"></div></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;