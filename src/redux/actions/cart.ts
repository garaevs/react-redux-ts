import { AddItemsCartPayload, ItemsCartDelete, ItemsCartDelPay } from './../../types/cart';
import { AddItemsCart } from '../../types/cart';

export const cartItemsAction = (payload: AddItemsCartPayload): AddItemsCart => {
	return {
		type: 'ADD_CART_ITEMS',
		payload,
	};
};

export const cartItemsActionDelete = (payload: AddItemsCartPayload): AddItemsCart => {
	return {
		type: 'DELETE_CART_ITEMS',
		payload,
	};
};
