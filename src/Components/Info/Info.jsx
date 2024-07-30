import React from 'react'
import './Info.css'

export default function Info() {
    return (
        <section className='info py-5 text-white'>
            <div className="container w-75 py-5">
                <div className='row text-center justify-content-between'>
                    <div className="col-md-4 col-12">
                        <h2 className='mb-4'>LOCATION</h2>
                        <p>2215 John Daniel Drive <br />
                            Clark, MO 65243
                        </p>
                    </div>
                    <div className="col-md-4 col-12 text-center">
                        <h2 className='mb-4'>AROUND THE WEB</h2>
                        <div className='icons w-75 mx-auto d-flex justify-content-between'>
                            <a className='d-flex justify-content-center align-items-center' href="#"><i class="fa-brands fa-facebook-f fa-md"></i></a>
                            <a className='d-flex justify-content-center align-items-center' href="#"><i class="fa-brands fa-twitter fa-md"></i></a>
                            <a className='d-flex justify-content-center align-items-center' href="#"><i class="fa-brands fa-linkedin-in fa-md"></i></a>
                            <a className='d-flex justify-content-center align-items-center' href="#"><i class="fa-brands fa-youtube fa-md"></i></a>
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mt-4 mt-md-0">
                        <h2 className='mb-4'>ABOUT FREELANCER</h2>
                        <p>Freelance is a free to use, MIT licensed Bootstrap theme created by Hamza Nouh</p>
                    </div>
                </div>
            </div>

        </section>

    )
}
