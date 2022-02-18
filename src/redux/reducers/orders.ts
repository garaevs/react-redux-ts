import { IOrdersState, IOrdersPayload, IOrdersAction } from './../../types/orders';

const initialState: IOrdersState = {
	orders: [],
};

export const ordersReducer = (state = initialState, action: IOrdersAction) => {
	switch (action.type) {
		case 'ORDERS_LIST':
			return {
				...state,
				orders: action.payload,
			};

		default:
			return state;
	}
};
