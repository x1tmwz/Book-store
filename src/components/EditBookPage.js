import React from 'react';
import { connect } from 'react-redux';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import BookForm from './BookForm';
import { editBook } from '../actions/book';
import bookIdSelector from '../selector/bookIdSelector';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const EditBookPage = (props) => {
    let subtitle;
    const { id } = useParams();
    const book = bookIdSelector(props.books, id);
    const submit = (bookData) => {
        props.startEditBook(id, bookData);
        closeModal();
    }
    const valid = () => {
        if ((!!id && !!book)) {
            return true;
        }
        props.history.push('/');
    }
    const closeModal = () => {
        props.history.push('/');
    }
    const afterOpenModal = () => {
        subtitle.style.color = '#f00';
    }
    return (
        <div>
            <Modal
                isOpen={valid()}
                onRequestClose={closeModal}
                contentLabel="Example Modal"
                style={customStyles}
                onAfterOpen={afterOpenModal}
            >
                <div className="d-flex justify-content-between">
                    <h2 className="text-secondary" ref={_subtitle => (subtitle = _subtitle)}>Edit</h2>
                    <button onClick={closeModal} className="btn btn-light" >X</button>
                </div>
                <BookForm submit={submit}  {...book} />
            </Modal>
        </div>


    );
}
const mapStateToProps = (state) => ({
    books: state.books

})
const mapDispacthToProps = (dispatch) => ({
    startEditBook: (id, updates) => dispatch(editBook(id, updates))
})
export default connect(mapStateToProps, mapDispacthToProps)(EditBookPage);


