import React from 'react'
import './newsletterStyles.css'

const Newsletter = () => {
    return (
        <div className="container pt-4 pb-4">
            <div className="row align-items-center">
                <div className="col-md-6">
                    <h1>Newsletter</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br /> Aperiam temporibus molestias aspernatur</p>
                </div>
                <div className="col-md-6">
                    <form>
                        <div className="newsletter-form d-flex">
                            <input type="text" className="form-control" placeholder="Email Address" />
                            <button className="btn">Subscribe</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Newsletter
