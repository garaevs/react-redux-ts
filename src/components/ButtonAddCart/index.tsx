import React from 'react';
import { cartItemsAction } from '../../redux/actions/cart';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { AddItemsCartPayload } from '../../types/cart';
import { ICatalogProps } from '../catalog';

import styles from './ButtonAddCart.module.scss';

interface buttonAddCartProps {
	name: string;
	item: AddItemsCartPayload;
}

const ButtonAddCart: React.FC<buttonAddCartProps> = ({ name, item }) => {
	const cartData = useAppSelector(state => state.cartItems.cart);
	const dispatch = useAppDispatch();

	const onAddCart = () => {
		dispatch(cartItemsAction(item));
	};

	return (
		<>
			<button type='submit' onClick={onAddCart} className={styles.button}>
				{name}
			</button>
		</>
	);
};

export default ButtonAddCart;
