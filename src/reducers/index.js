
import categoriesReducer from './categoriesReducer';
import itemsReducer from './itemsReducer';
import { combineReducers } from 'redux';
import shoppingCartReducer from './shoppingCartReducer'

const rootReducer = combineReducers({
    categoriesReducer, itemsReducer, shoppingCartReducer
})
export default rootReducer