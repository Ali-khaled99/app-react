import React from 'react'
import './Navbar.css'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <section className='py-5'>
            <nav class="navbar navbar-expand-lg py-4 fixed-top">
                <div class="container">
                    <a class="navbar-brand fw-bolder fs-3 text-white" href="#">START REACT</a>
                    <button class="navbar-toggler shadow-none bg-white" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <div className="d-flex justif-content-center align-items-center">
                        <span class="navbar-toggler-icon me-1"></span>
                        <span>Menu</span>
                        </div>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item px-4">
                                <NavLink to="/" class="p-3 nav-link  fw-bolder fs-6" aria-current="page">HOME</NavLink>
                            </li>
                            <li class="nav-item px-4">
                                <NavLink to="/about" class="nav-link  fw-bolder fs-6 p-3" href="#portfolio">ABOUT</NavLink>
                            </li>   
                            <li class="nav-item px-4">
                                <NavLink to="/portfolio" class="nav-link  fw-bolder fs-6 p-3" href="#portfolio">PORTFOLIO</NavLink>
                            </li>   
                            <li class="nav-item px-4">
                                <NavLink to="/contact" class="nav-link  fw-bolder fs-6 p-3" href="#contact">CONTACT</NavLink>
                            </li>   
                        </ul>
                    </div>
                </div>
            </nav>
        </section>

    )
}
