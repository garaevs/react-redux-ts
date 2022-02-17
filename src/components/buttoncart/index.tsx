import React from 'react';
import styles from './Button.module.scss';
import shoppingCartSvg from '../../assets/images/shopping-bag.svg';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../redux/hooks';
import { AddItemsCartPayload } from '../../types/cart';

interface buttonCartProps {
	text: any[];
}

const ButtonCart: React.FC<buttonCartProps> = ({ text }) => {
	// console.log(cartData);
	let sumPriceCart;

	if (text.length > 0) {
		sumPriceCart = text.reduce(function (a: any, currentValue) {
			return a + currentValue.price;
		}, 0);
	} else {
		sumPriceCart = 0;
	}
	return (
		<>
			<Link to='/cart'>
				<button className={styles.buttonCart} type='submit'>
					<img src={shoppingCartSvg} alt='cart' />
					{sumPriceCart} ₽
				</button>
			</Link>
		</>
	);
};

export default ButtonCart;
