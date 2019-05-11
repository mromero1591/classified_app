import {createStore, combineReducers} from 'redux';
import itemsReducer from './itemsReducer/itemsReducer';

const reducer = combineReducers({
    items: itemsReducer
});

export default createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());