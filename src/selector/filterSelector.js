const filterSelector = (books,filters)=>{
    return books.filter(book=>{
        const nameMatch = book.name.toLowerCase().includes(filters.text.toLowerCase());
        return nameMatch
    })
}
export default filterSelector;