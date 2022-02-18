import { IOrdersAction } from './../../types/orders';

export const ordersAction = (payload: IOrdersAction) => {
	return {
		type: 'ORDERS_LIST',
		payload,
	};
};
