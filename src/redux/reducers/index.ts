import { ordersReducer } from './orders';
import { combineReducers } from 'redux';
import { itemsReducer } from './items';
import { cartReducer } from './cart';

export const rootReducer = combineReducers({
	getItems: itemsReducer,
	cartItems: cartReducer,
	orderItems: ordersReducer,
});
