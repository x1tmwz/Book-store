import React from 'react';
import {wordFormatter,currencyFormatter} from '../utils/formatter';

const Item = ({
    name,
    author,
    price,
    image,
    description
}) => {
    return (
        <div className="card mt-3 mb-3">

            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={image} alt='' className="img-thumbnail" />
                </div>
                <div className="col-md-8">
                    <div className='card-body'>
                        <h5 className="card-title">{wordFormatter(name)}</h5>
                        <p className="card-text">Author: {wordFormatter (author)}</p>
                        <p className="card-text">Price :{currencyFormatter(price)}</p>
                        <p className="card-text">Description :{wordFormatter(description)}</p>
                    </div>
                </div>
            </div>

        </div>
    );
}
export default Item;
