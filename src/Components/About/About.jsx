import React from 'react'
import './About.css'

export default function About() {
    return (
        <section className='about-sec py-5' id='about'>
            <div className='w-50 w-sm-100s mx-auto text-center'>
            <h1 className='fw-bolder'>About</h1>
                <div className="text-center about-sec-line position-relative w-50s mx-auto">
                    <i class="fa-solid fa-star fa-xl"></i>
                </div>
                <div className="row g-3 py-5 fs-4 text-white text-start">
                <div className="col-md-6">
                Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
                </div>
                <div className="col-md-6">
                You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
                </div>
            </div>
            </div>
            
        </section>

    )
}
