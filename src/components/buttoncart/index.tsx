import React from 'react';
import styles from './Button.module.scss';

interface buttonCartProps {
	imgLink: string;
	text: string;
}

const ButtonCart: React.FC<buttonCartProps> = ({ imgLink, text }) => {
	return (
		<>
			<button className={styles.buttonCart}>
				<img src={imgLink} alt='cart' />
				{text} ₽
			</button>
		</>
	);
};

export default ButtonCart;
