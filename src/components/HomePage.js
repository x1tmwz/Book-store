import React from 'react';
import BookList from './BookList';
import SearchBar from './SearchBar';

const HomePage = () => {
    return (
        <div>
            <SearchBar />
            <BookList />
        </div>
    );
}
export default HomePage;