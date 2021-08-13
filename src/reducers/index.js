
import categoriesReducer from './categoriesReducer';
import itemsReducer from './itemsReducer';
import shoppingCartReducer from './shoppingCartReducer'
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    categories: categoriesReducer,
    items: itemsReducer,
    shoppingCart: shoppingCartReducer
})
export default rootReducer