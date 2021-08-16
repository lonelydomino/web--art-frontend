
import categoriesReducer from './categoriesReducer';
import itemsReducer from './itemsReducer';
import shoppingCartReducer from './shoppingCartReducer'
import { combineReducers } from 'redux';
import authReducer from './authReducer';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
    shoppingCart: shoppingCartReducer,
    auth: authReducer
})
export default rootReducer