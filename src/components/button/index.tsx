import React from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { ICatalogProps } from '../catalog';

import styles from './Button.module.scss';

interface buttonProps {
	name: string;
	addOrderCart?: () => void;
}

const Button: React.FC<buttonProps> = ({ name, addOrderCart }) => {
	const addFunction = () => {
		addOrderCart && addOrderCart();
	};

	return (
		<>
			<button onClick={addFunction} className={styles.button}>
				{name}
			</button>
		</>
	);
};

export default Button;
