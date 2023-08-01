import React from 'react'
import HeadingS from './HeadingS'
import Header from './Header'
import Footer from './Footer'

const About = () => {
  return (
    <>
      <Header />
      <HeadingS pageTitle={"About Us"} />
      <div>
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
      </div>
      <Footer />
    </>

  )
}

export default About