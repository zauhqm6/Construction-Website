import React from 'react'
import css from './HeadingS.css'

const HeadingS = ({pageTitle}) => {
    return (
        <>
            <div className="container-fluid page-header py-5 mb-5 wow fadeIn fade-eft" data-wow-delay="0.1s" >
                <div className="container py-5">
                    <h1 className="display-3 text-white  slideInRight">{pageTitle}</h1>
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb  slideInRight mb-0">
                            <li className="breadcrumb-item"><a href="#">Home</a></li>
                            <li className="breadcrumb-item active" aria-current="page">{pageTitle}</li>
                        </ol>
                    </nav>
                </div>
            </div>
        </>

    )
}

export default HeadingS