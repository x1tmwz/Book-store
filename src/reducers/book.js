import books from '../data/books';


export default (state = books, action) => {
    switch (action.type) {
        case "ADD_BOOK":
            return [...state, action.book];
        case "REMOVE_BOOK":
            return state.filter((book) => book._id !== action.id);
        case "EDIT_BOOK":
            return state.map((book) => {
                if (book._id === action.id) {
                    return {
                        ...book,
                        ...action.updates
                    }
                }
                return book;
            })
        case "ADD_TO_CART":
            return state.map((book) => {
                if (book._id === action.bookId) {
                    if (!book.users.includes(action.userId)) {
                        return {
                            ...book,
                            users: [...book.users, action.userId]
                        }
                    }
                }
                return book;
            })
        case "REMOVE_FROM_CART":
            return state.map((book) => {
                if (book._id === action.bookId) {
                    return {
                        ...book,
                        users: book.users.filter(user => user !== action.userId)
                    }
                }
                return book;
            })

        default:
            return state
    }
}