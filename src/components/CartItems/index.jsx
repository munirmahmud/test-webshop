import React from 'react'
import './cartItemsStyles.css'

const CartItems = () => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-8">
                    <h3>Shopping Cart</h3>
                    <div className="cart-product-wrapper">
                        <div className="product d-flex mb-3">
                            {/* <img src="" alt=""/> */}
                            <div className="productimg mr-3"></div>
                            <div className="cart-content-wrapper d-flex align-items-center">
                                <div className="cart-content">
                                    <h2>Product Title</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.</p>
                                    <div>$300</div>
                                </div>
                                <div className="product-quantity ml-auto">
                                    <input className="form-control" type="text" placeholder="1pcs" />
                                </div>
                            </div>
                        </div>
                        <div className="product d-flex">
                            {/* <img src="" alt=""/> */}
                            <div className="productimg mr-3"></div>
                            <div className="cart-content-wrapper d-flex align-items-center">
                                <div className="cart-content">
                                    <h2>Product Title</h2>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque.</p>
                                    <div>$300</div>
                                </div>

                                <div className="product-quantity ml-auto">
                                    <input className="form-control" type="text" placeholder="1pcs" />
                                </div>
                            </div>
                        </div>
                    </div>

                    <button type="button" className="btn btn-next">Next</button>
                    <button type="button" className="btn btn-cancel ml-3">Cancel</button>
                </div>

                <div className="col-md-4">
                    <h5>Summary</h5>
                    <div className="coupon text-uppercase mb-3 pb-2">Enter Coupon Code</div>
                    <div className="total-wrapper">
                        <div className="d-flex justify-content-between mb-2">
                            <span>Subtotal </span>
                            <span>$600</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Shipping </span>
                            <span>Free</span>
                        </div>
                        <div className="d-flex justify-content-between mb-2">
                            <span>Taxes </span>
                            <span>$13</span>
                        </div>
                    </div>

                    <div className="d-flex justify-content-between">
                        <span>Total</span>
                        <strong>$613</strong>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItems
