import React from 'react';
import BookForm from './BookForm'
import { connect } from 'react-redux';
import { addBook } from '../actions/book';


const AddBookPage = (props) => {
    const submit = (bookData) => {
        props.startAddBook(bookData);
        props.history.push('/');
    }

    return (
        <div>
            <h1>Add new book</h1>
            <BookForm submit={submit} />
        </div>
    );
}
const mapDispatchToProps = (dispatch) => ({
    startAddBook: (bookData) => dispatch(addBook(bookData))
})
export default connect(undefined, mapDispatchToProps)(AddBookPage);