import React from 'react';
import { connect } from 'react-redux';
import Item from './Item';
import {removeFromCart} from '../actions/book'


const CartItem = ({
    id,
    userId,
    name,
    author,
    price,
    image,
    description,
    startRemoveFromCart
}) => {
    const removeHandler =()=>{
        startRemoveFromCart(userId,id);
    }

    return (
        <div>
            <Item
                name={name}
                author={author}
                price={price}
                image={image}
                description={description}
            />
            <button onClick={removeHandler} className="btn btn-primary mb-2">Remove</button>
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    startRemoveFromCart:(userId,bookId)=>dispatch(removeFromCart(userId,bookId))

})
export default connect(undefined, mapDispatchToProps)(CartItem);