
import React from 'react'
import css from './style.css'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (

        <>
            <div className="container-fluid bg-dark px-0">
                <div className="row g-0 d-none d-lg-flex">
                    <div className="col-lg-6 ps-5 text-start">
                        <div className="h-100 d-inline-flex align-items-center text-white">
                            <span>Follow Us:</span>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-linkedin-in"></i></a>
                            <a className="btn btn-link text-light" href=""><i className="fab fa-instagram"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-6 text-end">
                        <div className="h-100 topbar-right d-inline-flex align-items-center text-white py-2 px-5">
                            <span className="fs-5 fw-bold me-2"><i className="fa fa-phone-alt me-2"></i>Call Us:</span>
                            <span className="fs-5 fw-bold"><a href="tel:+012 345 6789">+012 345 6789</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg bg-white navbar-light sticky-top py-0 pe-5" >
                <Link
                    to="/" className="navbar-brand ps-5 me-0 d-flex align-items-center">
                    <h1 className="text-white m-0">Industro</h1>
                </Link>
                <button type="button" className="navbar-toggler me-0" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarCollapse">
                    <div className="navbar-nav ms-auto p-4 p-lg-0">
                        <NavLink to="/"
                            style={({ isActive }) => (isActive ? { color: '#ff5e14' } : { color: '#02245b' })}
                            className="nav-item nav-link active">Home</NavLink>

                        <NavLink to="/about"
                            style={({ isActive }) => (isActive ? { color: '#ff5e14' } : { color: '#02245b' })}
                            className="nav-item nav-link"
                        >About
                        </NavLink>

                        <NavLink to="/services"
                        style={({ isActive }) => (isActive ? { color: '#ff5e14' } : { color: '#02245b' })}
                         className="nav-item nav-link">Services</NavLink>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Mega Menu Link</a>
                                <a className="dropdown-item" href="#">Mega Menu Link</a>
                                <a className="dropdown-item" href="#">Mega Menu Link</a>
                                <a className="dropdown-item" href="#">Mega Menu Link</a>

                            </div>
                        </li>

                        <NavLink
                        style={({ isActive }) => (isActive ? { color: '#ff5e14' } : { color: '#02245b' })}
                        to="/contact-us" className="nav-item nav-link">Contact</NavLink>
                    </div>
                    <Link to="/contact-us" className="btn btn-primary px-3 d-none d-lg-block">Get A Quote</Link>
                </div>
            </nav>
        </>

    )
}

export default Header;