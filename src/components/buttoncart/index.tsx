import React from 'react';
import styles from './Button.module.scss';
import shoppingCartSvg from '../../assets/images/shopping-bag.svg';
import { Link } from 'react-router-dom';
interface buttonCartProps {
	text: string;
}

const ButtonCart: React.FC<buttonCartProps> = ({ text }) => {
	return (
		<>
			<Link to='/cart'>
				<button className={styles.buttonCart}>
					<img src={shoppingCartSvg} alt='cart' />
					{text} ₽
				</button>
			</Link>
		</>
	);
};

export default ButtonCart;
