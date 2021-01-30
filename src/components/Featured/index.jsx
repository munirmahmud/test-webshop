import { faCaretLeft, faCaretRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Carousel, { consts } from 'react-elastic-carousel';
import products from '../../data.json';
import { priceFormat } from '../../helpers';
import { Image, Item } from './carouselStyles';

const Featured = () => {
    const breakPoints = [
        {width: 1, itemsToShow: 1},
        {width: 550, itemsToShow: 2},
    ];

    const carouselArrows = ({ type, onClick, isEdge }) => {
        const pointer = type === consts.PREV ? <FontAwesomeIcon icon={faCaretLeft} size="2x" /> : <FontAwesomeIcon icon={faCaretRight} size="2x" />

        return (
          <button className="btn" onClick={onClick} disabled={isEdge}>
            {pointer}
          </button>
        )
    };

    return (
        <>
            <div className="container mb-5">
                <div className="row justify-content-center">
                    <div className="align-center mt-5 mb-3">
                        <h1>Featured Products New</h1>
                    </div>
                    <Carousel breakPoints={breakPoints} pagination={false} renderArrow={carouselArrows}>
                        {products.map(product => <Item key={product.id}>
                            <Image src={product.image} alt={product.title} />
                            
                            <div className="mt-3 text-center">
                                <h6>{product.title}</h6>
                                <div>{priceFormat(product.price)}</div>
                            </div>
                            </Item>)}
                    </Carousel>
                </div>
            </div>
            <hr />
        </>
    )
}

export default Featured
