
import categoriesReducer from './categoriesReducer';
import itemsReducer from './itemsReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    categoriesReducer, itemsReducer
})
export default rootReducer