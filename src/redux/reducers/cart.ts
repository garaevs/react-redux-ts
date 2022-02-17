import { ItemsCartState, AddItemsCart, ItemsCartDelete, ItemsCartDelPay } from './../../types/cart';

const initialState: ItemsCartState = {
	cart: [],
};

export const cartReducer = (state = initialState, action: AddItemsCart): ItemsCartState => {
	switch (action.type) {
		case 'ADD_CART_ITEMS': {
			return { ...state, cart: [...state.cart, action.payload] };
		}

		case 'DELETE_CART_ITEMS':
			const newItems = state.cart.filter(item => item !== action.payload);
			return {
				cart: newItems,
			};

		default:
			return state;
	}
};

// export const cartReducerDelete = (state = initialState, action: ItemsCartDelete) => {
// 	switch (action.type) {
// 		case 'DELETE_CART_ITEMS':
// 			const newItems = {
// 				...state.cart,
// 			};
// 			delete newItems[action.payload];

// 			return {
// 				...state,
// 				cart: newItems,
// 			};

// 		default:
// 			return state;
// 	}
// };
