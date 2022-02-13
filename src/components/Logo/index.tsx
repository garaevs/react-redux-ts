import React from 'react';
import styles from './Logo.module.scss';
import pizzaSvg from '../../assets/images/pizza.svg';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			<Link to={'/'}>
				<img src={pizzaSvg} alt='pizza' />{' '}
			</Link>
			<Link to={'/'}>
				{' '}
				<p>Пицца от Маркизио</p>{' '}
			</Link>
		</div>
	);
};

export default Logo;
