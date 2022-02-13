import { ItemsState, fetchItemsAction } from './../../types/items';

const initialState: ItemsState = {
	items: {
		pizzas: [],
		sushi: [],
		zakuski: [],
		dessert: [],
		drink: [],
		sous: [],
		combo: [],
	},
};

export const itemsReducer = (state = initialState, action: fetchItemsAction): ItemsState => {
	switch (action.type) {
		case 'GET_ITEMS':
			return { ...state, items: action.payload };

		default:
			return state;
	}
};
