import {createStore,combineReducers} from 'redux';
import bookReducer from '../reducers/book';
import userReducer from '../reducers/user';
import filterReducer from '../reducers/filter';

export default ()=>{
    const store = createStore(combineReducers({
        books:bookReducer,
        user:userReducer,
        filter:filterReducer
    }))
    return store;
}