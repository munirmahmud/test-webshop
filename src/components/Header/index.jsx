import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="mt-3">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-2">
                        <Link to="/" className="logo"><h3>Logo</h3></Link>
                    </div>
                    <div className="col-md-4">
                        <input type="text" placeholder="Search..." />
                    </div>

                    <div className="col-md-6">
                        <nav>
                            <ul className="nav justify-content-end position-relative">
                                <li className="nav-item"><Link className="nav-link" to="/">Home</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#">About</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#">Shop</Link></li>
                                <li className="nav-item"><Link className="nav-link" to="#">Help</Link></li>
                                <li className="nav-item cart">
                                    <Link className="nav-link" to="/cart">
                                    <FontAwesomeIcon icon={faShoppingCart} className="mr-2" />
                                        Your Cart</Link>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
