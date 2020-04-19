const cartCalculator = (books) => {
    let sum =0
    books.forEach(book => {
        sum = sum + parseInt(book.price);
    });
    return sum;
}
export default cartCalculator;