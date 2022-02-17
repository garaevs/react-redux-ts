import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { cartItemsActionDelete } from '../../redux/actions/cart';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AddItemsCartPayload, ItemsCartDelPay, ItemsCartState } from '../../types/cart';
import Button from '../button';
import Footer from '../Footer';
import Header from '../header';
import styles from './Cart.module.scss';

interface ICartProps {
	cartData: any[];
}

const Cart: React.FC<ICartProps> = ({ cartData }) => {
	// const cartData = useAppSelector(state => state.cartItems.cart);
	// console.log(cartData);
	const dispatch = useAppDispatch();
	let sumPriceCart;

	if (cartData.length > 0) {
		sumPriceCart = cartData.reduce(function (a, currentValue) {
			return a + currentValue.price;
		}, 0);
	} else {
		sumPriceCart = 0;
	}

	const navigate = useNavigate();
	const addOrderCart = () => {
		axios.post('http://localhost:3001/orders', { ...cartData });
		navigate('/order');
	};
	console.log('cartData', cartData);

	const cartItemDelete = (item: AddItemsCartPayload) => {
		// const newCartData = cartData.filter((item: AddItemsCartPayload) => item.name !== name);

		dispatch(cartItemsActionDelete(item));
		console.log('newCartData', item);
	};

	// console.log(sumPriceCart);
	return (
		<>
			<Header />
			<div className={styles.cart}>
				<h1 className={styles.cartTitle}>Ваш заказ</h1>
				<div className={styles.cartBlock}>
					{cartData.length > 0 ? (
						cartData.map((item: AddItemsCartPayload, index) => (
							<div className={styles.cartItem} key={index}>
								<img src={item.picture} alt='imgCart' />
								<div className={styles.cartInfo}>
									<p className={styles.cartTitle}>{item.name}</p>
									<p className={styles.cartSubTitle}>{item.text}</p>
								</div>
								<p className={styles.cartItemPrice}>{item.price} Р</p>
								<div className={styles.cartButton}>
									<button className={styles.cartButtonMinus} onClick={() => cartItemDelete(item)}>
										x
									</button>
									{/* <p className={styles.cartButtonNumber}>1</p>
									<button className={styles.cartButtonPlus}>+</button> */}
								</div>
							</div>
						))
					) : (
						<h3>В корзине отсутствуют товары</h3>
					)}

					<div className={styles.cartOrder}>
						<span className={styles.cartOrderPrice}>Итого: {sumPriceCart} ₽</span>
						<Button name={'Заказать'} addOrderCart={addOrderCart} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
