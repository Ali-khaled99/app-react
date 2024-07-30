import React from 'react'
import './Portfolio.css'
import cabinlogo from '../../assets/cabin.4417330275f78faa31c3.png'
import cakelogo from '../../assets/cake.6554473016d32b343f02.png'
import circuslogo from '../../assets/circus.494a4a914b5471b41f3e.png'
import controllogo from '../../assets/game.a940b57aa7bab2eacc52.png'
import safelogo from '../../assets/safe.01792c0bdc342bf4bf9c.png'
import submarinelogo from '../../assets/submarine.48c9704ca7f8ce901038.png'
export default function Protfolio() {
    return (
        <section className='py-5 portfolio' id='portfolio'>
            <div className='container mx-auto'>
                <div className='w-md-50 w-100 p-3 p-md-0 mx-auto text-center'>
                    <h1 className='fw-bolder'>PORTFOLIO</h1>
                    <div className="text-center portfolio-sec-line position-relative w-50s mx-auto">
                        <i class="fa-solid fa-star fa-xl"></i>
                    </div>
                </div>
                <div className="row g-4 my-4">
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal" className=" p-0 col-md-5 offset-md-1 col-lg-3 offset-lg-1 col-12 position-relative">
                        <div className="item d-flex justify-content-center align-items-center">
                            <div className="layer position-absolute d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus fa-4x text-white"></i></div>
                            <img className='w-100' src={cabinlogo} alt="" />
                        </div>
                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close px-4 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <h1 class="modal-title fs-1 text-center" id="exampleModalLabel">LOG CABIN</h1>
                                    <div className="text-center portfolio-sec-line position-relative w-50s mx-auto">
                                        <i class="fa-solid fa-star fa-xl"></i>
                                    </div>
                                    <div class="modal-body">
                                        <div className="container">
                                            <div className="modal-image mt-3">
                                            <img className='w-100 rounded-3 mb-3' src={cabinlogo} alt="" />
                                        <p className='fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal2" className=" p-0 col-md-5 offset-md-1 col-lg-3 offset-lg-1 col-12 position-relative">
                        <div className="item d-flex justify-content-center align-items-center">
                            <div className="layer position-absolute d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus fa-4x text-white"></i></div>
                            <img className='w-100' src={cakelogo} alt="" />
                        </div>
                        <div class="modal fade" id="exampleModal2" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close px-4 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <h1 class="modal-title fs-1 text-center" id="exampleModalLabel">TASTY CAKE</h1>
                                    <div className="text-center portfolio-sec-line position-relative w-50s mx-auto">
                                        <i class="fa-solid fa-star fa-xl"></i>
                                    </div>
                                    <div class="modal-body">
                                        <div className="container">
                                            <div className="modal-image mt-3">
                                            <img className='w-100 rounded-3 mb-3' src={cakelogo} alt="" />
                                        <p className='fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" p-0  col-md-5 offset-md-1 col-lg-3 offset-lg-1 col-12 position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal3">
                        <div className="item d-flex justify-content-center align-items-center">
                            <div className="layer position-absolute d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus fa-4x text-white"></i></div>
                            <img className='w-100' src={circuslogo} alt="" />
                        </div>
                        <div class="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close px-4 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <h1 class="modal-title fs-1 text-center" id="exampleModalLabel">CIRCUS TENT</h1>
                                    <div className="text-center portfolio-sec-line position-relative w-50s mx-auto">
                                        <i class="fa-solid fa-star fa-xl"></i>
                                    </div>
                                    <div class="modal-body">
                                        <div className="container">
                                            <div className="modal-image mt-3">
                                            <img className='w-100 rounded-3 mb-3' src={circuslogo} alt="" />
                                        <p className='fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" p-0 col-md-5 offset-md-1 col-lg-3 offset-lg-1 col-12 position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal4">
                        <div className="item d-flex justify-content-center align-items-center">
                            <div className="layer position-absolute d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus fa-4x text-white"></i></div>
                            <img className='w-100' src={controllogo} alt="" />
                        </div>
                        <div class="modal fade" id="exampleModal4" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close px-4 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <h1 class="modal-title fs-1 text-center" id="exampleModalLabel">CONTROLER</h1>
                                    <div className="text-center portfolio-sec-line position-relative w-50s mx-auto">
                                        <i class="fa-solid fa-star fa-xl"></i>
                                    </div>
                                    <div class="modal-body">
                                        <div className="container">
                                            <div className="modal-image mt-3">
                                            <img className='w-100 rounded-3 mb-3' src={controllogo} alt="" />
                                        <p className='fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=" p-0 col-md-5 offset-md-1 col-lg-3 offset-lg-1 col-12 position-relative" data-bs-toggle="modal" data-bs-target="#exampleModal5">
                        <div className="item d-flex justify-content-center align-items-center">
                            <div className="layer position-absolute d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus fa-4x text-white"></i></div>
                            <img className='w-100' src={safelogo} alt="" />
                        </div>
                        <div class="modal fade" id="exampleModal5" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close px-4 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <h1 class="modal-title fs-1 text-center" id="exampleModalLabel">LOCKED SAFE</h1>
                                    <div className="text-center portfolio-sec-line position-relative w-50s mx-auto">
                                        <i class="fa-solid fa-star fa-xl"></i>
                                    </div>
                                    <div class="modal-body">
                                        <div className="container">
                                            <div className="modal-image mt-3">
                                            <img className='w-100 rounded-3 mb-3' src={safelogo} alt="" />
                                        <p className='fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-bs-toggle="modal" data-bs-target="#exampleModal6" className=" p-0 col-md-5 offset-md-1 col-lg-3 offset-lg-1 col-12 position-relative">
                        <div className="item d-flex justify-content-center align-items-center">
                            <div className="layer position-absolute d-flex justify-content-center align-items-center"><i class="fa-solid fa-plus fa-4x text-white"></i></div>
                            <img className='w-100' src={submarinelogo} alt="" />
                        </div>
                        <div class="modal fade" id="exampleModal6" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div class="modal-dialog modal-xl">
                                <div class="modal-content">
                                    <div class="modal-header border-0">
                                        <button type="button" class="btn-close px-4 shadow-none" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <h1 class="modal-title fs-1 text-center" id="exampleModalLabel">SUBMARINE</h1>
                                    <div className="text-center portfolio-sec-line position-relative w-50s mx-auto">
                                        <i class="fa-solid fa-star fa-xl"></i>
                                    </div>
                                    <div class="modal-body">
                                        <div className="container">
                                            <div className="modal-image mt-3">
                                            <img className='w-100 rounded-3 mb-3' src={submarinelogo} alt="" />
                                        <p className='fw-semibold fs-5 text-center'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia neque assumenda ipsam nihil, molestias magnam, recusandae quos quis inventore quisquam velit asperiores, vitae? Reprehenderit soluta, eos quod consequuntur itaque. Nam.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
