export interface IOrdersAction {
	type: string;
	payload: any[];
}

export interface IOrdersState {
	orders: Array<IOrdersPayload>[];
}

export interface IOrdersPayload {
	category: string;
	name: string;
	text: string;
	picture: string;
	price: number;
	id?: number;
}
