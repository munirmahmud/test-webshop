import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
    return (
        <>
            <hr />
            <div className="container mt-5">
                <div className="row">
                    <div className="col-md-3">
                        <div className="footer-logo">
                            <h1 className="position-relative mb-3 pb-4">Logo</h1>
                            <address>
                                1717 Harrison St, San Francisco, <br /> CA 94103, USA
                            </address>
                        </div>
                    </div>

                    <div className="col-md-9">
                        <div className="row footer-menu-wrapper">
                            <div className="col-md-3">
                                <h6>Main Menu</h6>
                                <ul className="navbar-nav flex-column">
                                    <li className="nav-item"><Link className="nav-link" to="#">Home</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">About</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Shop</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Help</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h6>Company</h6>
                                <ul className="navbar-nav flex-column">
                                    <li className="nav-item"><Link className="nav-link" to="#">The Company</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Careers</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Press</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h6>Discover</h6>
                                <ul className="navbar-nav flex-column">
                                    <li className="nav-item"><Link className="nav-link" to="#">The Team</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Our Story</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Brand Motto</Link></li>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <h6>Find Us On</h6>
                                <ul className="navbar-nav flex-column">
                                    <li className="nav-item"><Link className="nav-link" to="#">Facebook</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Twitter</Link></li>
                                    <li className="nav-item"><Link className="nav-link" to="#">Instagram</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer