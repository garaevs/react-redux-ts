import React from 'react';
import styles from './Button.module.scss';
import shoppingCartSvg from '../../assets/images/shopping-bag.svg';
interface buttonCartProps {
	text: string;
}

const ButtonCart: React.FC<buttonCartProps> = ({ text }) => {
	return (
		<>
			<button className={styles.buttonCart}>
				<img src={shoppingCartSvg} alt='cart' />
				{text} ₽
			</button>
		</>
	);
};

export default ButtonCart;
