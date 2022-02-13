import { combineReducers } from 'redux';
import { itemsReducer } from './items';

export const rootReducer = combineReducers({
	getItems: itemsReducer,
});
