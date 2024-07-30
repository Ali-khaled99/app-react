import React from 'react'
import './Contact.css'
export default function Contact() {
    return (
        <section className='py-5 contact' id='contact'>
            <div className='w-md-50 w-100 p-3 p-md-0 mx-auto text-center'>
                <h1 className='fw-bolder'>CONTACT ME</h1>
                <div className="text-center contact-sec-line position-relative w-50s mx-auto">
                    <i class="fa-solid fa-star fa-xl"></i>
                </div>
                <div className="row mt-5">
                    <div className="col-md-8 mx-auto">
                        <form className='d-flex flex-column' action="">
                            <input className='form-control w-100 border-0 shadow-none p-3 mb-3' type="text" placeholder='Name' />
                            <input className='form-control w-100 border-0 shadow-none p-3 mb-3' type="text" placeholder='Email Address' />
                            <input className='form-control w-100 border-0 shadow-none p-3 mb-3' type="text" placeholder=' Phone Number' />
                            <textarea rows={6} className='form-control w-100 border-0 shadow-none p-3 mb-3' type="text" placeholder='Message' />
                            <button className='w-25 py-3 border-0 btn  btn-success'>send</button>    
                        </form>
                        
                    </div>
                </div>

            </div>
        </section>

    )
}
