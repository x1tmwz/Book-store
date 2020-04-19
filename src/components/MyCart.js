import React from 'react';
import { connect } from 'react-redux';
import userBooksSelector from '../selector/userBooksSelector';
import CartItem from './CartItem';
import cartCalculator from '../selector/cartCaculator';
import {currencyFormatter} from '../utils/formatter'

const MyCart = (props) => {
    return (
        <div>
            {props.books.map(book => <CartItem
                key={book._id}
                userId={props.userId}
                id={book._id}
                name={book.name}
                author={book.author}
                price={book.price}
                image={book.image}
                description={book.description}
            />)}
            <h2 className="rounded-pill bg-primary text-white">Total price : {currencyFormatter(cartCalculator(props.books))}</h2>
        </div>
    );
}

const mapStateToProps = (state) => ({
    books: userBooksSelector(state.books, state.user._id),
    userId:state.user._id
})

export default connect(mapStateToProps)(MyCart);