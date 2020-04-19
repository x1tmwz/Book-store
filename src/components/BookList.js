import React from 'react';
import { connect } from 'react-redux'
import BookItem from './BookItem';
import filterSelector from '../selector/filterSelector';

const BookList = (props) => {
    return (
        <div>
            {props.books.map(book=><BookItem
            key={book._id}
            id={book._id}
            name={book.name}
            author={book.author}
            price={book.price}
            image={book.image}
            description={book.description} 
            />)}
        </div>
    );
}
const mapStateToProps = (state) => ({
    books: filterSelector(state.books,state.filter)
})
export default connect(mapStateToProps)(BookList);