const bookIdSelector =(books,id)=>{
    const book = books.find(book => book._id === id);
    return book;
}
export default bookIdSelector;