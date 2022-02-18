import React from 'react';
import { cartItemsAction } from '../../redux/actions/cart';
import { useAppDispatch } from '../../redux/hooks';
import { AddItemsCartPayload } from '../../types/cart';

import styles from './ButtonAddCart.module.scss';

interface buttonAddCartProps {
	name: string;
	item: AddItemsCartPayload;
}

const ButtonAddCart: React.FC<buttonAddCartProps> = ({ name, item }) => {
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
