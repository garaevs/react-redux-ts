export interface fetchItemsAction {
	type: string;
	payload?: any;
}

export interface ItemsActionPayload {
	pizzas: any[];
	sushi: any[];
	zakuski: any[];
	dessert: any[];
	drink: any[];
	sous: any[];
	combo: any[];
}

export interface ItemsState {
	items: {
		pizzas: any[];
		sushi: any[];
		zakuski: any[];
		dessert: any[];
		drink: any[];
		sous: any[];
		combo: any[];
	};
}
