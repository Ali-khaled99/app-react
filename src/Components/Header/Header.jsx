import React from 'react'
import './Header.css'
import headerImage from '../../assets/avataaars.aa9aff02ddd0ef36a1724ecef4133df9.svg'
export default function Header() {
    return (
        <section className='py-4 header'>
            <div className='container text-center text-white'>
                <div className='text-center'>
                    <img className='w-20' src={headerImage} alt="" />
                </div>
                <div className="site-name mt-2">
                    <h1 className='fw-bolder'>START REACT</h1>
                </div>
                <div className='w-50 mx-auto text-center mt-5'>
                    <div className="text-center header-sec-line position-relative w-50s mx-auto">
                        <i class="fa-solid fa-star fa-xl"></i>
                    </div>
                </div>
                <div className='py-4 fs-3 fw-semibold'>
                    <p>Graphic Artist - Web Designer - Illustrator</p>
                </div>
            </div>
        </section>

    )
}
