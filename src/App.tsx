import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Filter from './components/Filter';
import Cart from './components/Cart';
import CartOrder from './components/CartOrder';
import Home from './components/Home';
import Shop from './components/Shop';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import { itemsAction } from './redux/actions/items';

function App() {
	const { combo, dessert, drink, pizzas, sous, sushi, zakuski } = useAppSelector(
		state => state.getItems.items,
	);
	const cartData = useAppSelector(state => state.cartItems.cart);
	const dispatch = useAppDispatch();

	React.useEffect(() => {
		async function loadData() {
			const response = await axios.get('http://localhost:3001/items').then(({ data }) => data);
			dispatch(itemsAction(response));
		}
		loadData();
	}, []);

	return (
		<div className='wrapper'>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='cart' element={<Cart cartData={cartData} />} />
				<Route path='order' element={<CartOrder />} />
				<Route path='pizza' element={<Shop props={pizzas} />} />
				<Route path='sushi' element={<Shop props={sushi} />} />
				<Route path='zakuski' element={<Shop props={zakuski} />} />
				<Route path='dessert' element={<Shop props={dessert} />} />
				<Route path='drink' element={<Shop props={drink} />} />
				<Route path='sous' element={<Shop props={sous} />} />
				<Route path='combo' element={<Shop props={combo} />} />
				<Route path='redprice' element={<Shop props={pizzas} />} />
			</Routes>

			{/* <Filter /> */}
		</div>
	);
}

export default App;
