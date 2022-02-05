import React from 'react';
import styles from './Logo.module.scss';
import pizzaSvg from '../../assets/images/pizza.svg';

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			<img src={pizzaSvg} alt='pizza' />
			<p>Куда пицца</p>
		</div>
	);
};

export default Logo;
