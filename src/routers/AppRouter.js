import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from '../components/HomePage';
import NotFoundPage from '../components/NotFoundPage';
import AddBookPage from '../components/AddBookPage';
import Header from '../components/Header';
import EditBookPage from '../components/EditBookPage'
import LoginPage from '../components/LoginPage';
import MyCart from '../components/MyCart';
import PrivateRouteUser from './PrivateRouteUser';
import PrivateRouteAdmin from './PrivateRouteAdmin';

const AppRouter = () => {
    return (
        <BrowserRouter>
            <Header />
            <div className="container">
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <PrivateRouteAdmin path='/add' component={AddBookPage} />
                <PrivateRouteAdmin path='/edit/:id' component={EditBookPage} />
                <PrivateRouteUser path='/cart' component={MyCart} />
                <Route path='/Login' component={LoginPage} />
                <Route component={NotFoundPage} />
            </Switch>
            </div>
        </BrowserRouter>
    );

}
export default AppRouter;