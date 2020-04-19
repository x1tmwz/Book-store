import React from 'react';
import { useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { removeBook, addToCart } from '../actions/book';
import Item from './Item';

const BookItem = ({
    id,
    name,
    author,
    price,
    image,
    description,
    user,
    startRemoveBook,
    startAddToCart
}) => {
    const history = useHistory();
    const clickHandler = () => {
        if (user.type === 'admin') {
            history.push(`/edit/${id}`);
        }
    }
    const adminRemoveHandler = () => {
        startRemoveBook(id);
    }
    const addHandler = () => {
        startAddToCart(user._id, id);
    }
    return (
        <div>
            <Item name={name}
                author={author}
                price={price}
                image={image}
                description={description}
            />
            {user._id && <button className="btn btn-primary mb-2"
                onClick={user.type === 'admin' ? adminRemoveHandler : addHandler}
            >{user.type === 'admin' ? 'Remove' : 'Add to cart'}</button>}
            {(user._id && user.type==='admin') && <button onClick={clickHandler} className="btn btn-primary mb-2 ml-2">Edit</button>}
        </div>

    );
}
const mapStateToProps = (state) => ({
    user: state.user
})
const mapDispatchToProps = (dispatch) => ({
    startRemoveBook: (id) => dispatch(removeBook(id)),
    startAddToCart: (userId, BookId) => dispatch(addToCart(userId, BookId))
})

export default connect(mapStateToProps, mapDispatchToProps)(BookItem);


   