import React from 'react';
import { Link } from 'react-router-dom';
import products from '../../data.json';
import Product from '../Product';
import './Hero.css';

const Hero = () => {
    return (
        <>
            <div className="container hero-section">
                <div className="row hero-row flex-column align-items-center justify-content-center">
                    <h1 className="mb-5">Product tagline goes here</h1>
                    <div className="d-flex justify-content-center mb-5">
                        {products.slice(0, 3).map((product) => <Product key={product.id} product={product} />)}
                    </div>
                    <Link className="btn link-btn" to="#">Shop Now</Link>
                </div>
            </div>
            <hr/>
        </>
    )
}

export default Hero
