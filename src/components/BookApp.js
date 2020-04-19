import React from 'react';
import AppRouter from '../routers/AppRouter';
import {Provider} from 'react-redux';
import configStore from '../store/configstore';



const store = configStore();

const BookApp = () => {
    return (
        <Provider store={store}>
        <AppRouter />
        </Provider>
    );
}
export default BookApp;