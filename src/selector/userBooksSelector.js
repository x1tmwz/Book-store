const userBookSelector =(books,userId)=>{
    return books.filter((book)=>{
        const userFound = book.users.find((id)=> id === userId);
        return !!userFound;
    })
}
export default userBookSelector;