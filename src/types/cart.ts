export interface AddItemsCart {
	type: string;
	payload?: any;
}

export interface AddItemsCartPayload {
	category: string;
	name: string;
	text: string;
	picture: string;
	price: number;
	id?: number;
}

export interface ItemsCartState {
	cart: Array<AddItemsCartPayload>[];
}

export type ItemsCartDelPay = {
	name: string;
};

export interface ItemsCartDelete {
	type: string;
	payload: ItemsCartDelPay;
}
