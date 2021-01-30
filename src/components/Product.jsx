import React from 'react'

const Product = ({ product }) => {
    return (
        <div className="col-md-3">
            <div className="product-wrapper">
                <img src={product.image} alt={product.title} />
            </div>
        </div>
    )
}

export default Product
