import {v4 as uuid} from 'uuid';

const addBook =(bookdata ={})=>{
    const {
        name ='',
        author='',
        price=0,
        image=undefined,
        description=''
    } = bookdata;
    return{
        type:'ADD_BOOK',
        book:{
            _id: uuid(),
            name,
            author,
            price,
            image,
            description,
            users:[]
        }
    }
}

const removeBook=(id='')=>({
  type:"REMOVE_BOOK",
  id  
})
const editBook=(id="",updates={})=>({
    type:'EDIT_BOOK',
    id,
    updates
})
const addToCart =(userId='',bookId='')=>({
    type:"ADD_TO_CART",
    userId,
    bookId
})
const removeFromCart =(userId='',bookId='')=>({
    type:"REMOVE_FROM_CART",
    userId,
    bookId
})
export {addBook,removeBook,editBook,addToCart,removeFromCart};
