import React, { useState } from 'react';


const BookForm = (props) => {

    const [name, setName] = useState(props.name || "");
    const [author, setAuthor] = useState(props.author || "");
    const [price, setPrice] = useState(props.price || "");
    const [image, setImage] = useState(props.image || "");
    const [description, setDescription] = useState(props.description || "");
    const [priceError, setPriceError] = useState('');
    const [imageError, setImageError] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        if (!(!!imageError)) {
            props.submit({
                name,
                author,
                price,
                image,
                description
            })
        }
    }
    const nameHandler = (e) => {
        const text = e.target.value;
        setName(text.trim().toLowerCase());
    }
    const authorHandler = (e) => {
        const text = e.target.value;
        setAuthor(text.trim().toLowerCase());
    }
    const priceHandler = (e) => {
        const value = e.target.value;
        if (value < 0) {
            setPriceError('Please enter a valid price');
        } else {
            setPriceError('');
            setPrice(value);
        }
    }
    const imageHandler = (e) => {
        const file = e.target.files[0];
        const regEx = /^image\/(png|jpeg)$/;
        if (file.type.match(regEx) && file.size <= 100000) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImage(reader.result)
                setImageError('')
            }
            reader.readAsDataURL(file);
        } else {
            setImageError('Please upload png/jpeg file that is last then 100kb');
            setImage(undefined)
        }
    }
    const descriptionHandler = (e) => {
        const text = e.target.value;
        setDescription(text);
    }
    return (
        <form onSubmit={submitHandler}>
            <div className="form-group">
                <input onChange={nameHandler} type='text' placeholder='Name of book' className="form-control" name='nameOfBook' value={name} maxLength={100} required />
            </div>
            <div className="form-group">
                <input onChange={authorHandler} type='text' placeholder='Author'className="form-control" name='author' value={author} required />
            </div>
            <div className="form-group">
                <input onChange={priceHandler} type='number' placeholder='Price'className="form-control" name='price' value={price} min={0} required />
            </div>
            <div className="form-group">
                <input onChange={imageHandler} type='file' placeholder='Image' className="form-control-file" name='image' />
            </div>
            <div>
                <img src={image} alt="" className="img-thumbnail"/>
            </div>
            <div className="form-group">
                <textarea onChange={descriptionHandler} placeholder='description' className="form-control" name='description' value={description} />
            </div>
            {priceError && <p className="p-3 mb-2 bg-danger text-white">{priceError}</p>}
            {imageError && <p className="p-3 mb-2 bg-danger text-white">{imageError}</p>}
            <button className="btn btn-primary mb-2">Submit</button>
        </form>
    );
}

export default BookForm;