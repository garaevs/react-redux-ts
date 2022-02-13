import { fetchItemsAction, ItemsActionPayload } from './../../types/items';

export const itemsAction = (payload: ItemsActionPayload): fetchItemsAction => {
	return {
		type: 'GET_ITEMS',
		payload,
	};
};
