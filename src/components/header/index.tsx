import React from 'react';
import styles from './Header.module.scss';
import accountSvg from '../../assets/images/account.svg';
import locationSvg from '../../assets/images/location.svg';
import arrowDownSvg from '../../assets/images/arrow-down.svg';
import ButtonCart from '../buttoncart';
import Logo from '../Logo';
import Navigation from '../Navigation';
import { useAppSelector } from '../../redux/hooks';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
	const cartData = useAppSelector(state => state.cartItems.cart);

	return (
		<div className={styles.header}>
			<div className={styles.headerInfo}>
				<div className={styles.headerItem}>
					<div className={styles.headerCity}>
						<img src={locationSvg} alt='location' />
						<p className={styles.headerCityName}>Москва</p>
						<img src={arrowDownSvg} alt='arrow-down' />
					</div>
					<p className={styles.headerAddressCheck}>Проверить адрес</p>
					<p>
						Среднее время доставки*: <b>00:24.19</b>
					</p>
				</div>
				<div className={styles.headerItem}>
					<p>Время работы: с 11:00 до 23:00</p>
					<p className={styles.headerAccount}>
						<img src={accountSvg} alt='account' />
						<Link to={'/account'}>Личный кабинет</Link>
					</p>
				</div>
			</div>
			<hr className={styles.headerLine} />
			<div className={styles.headerInfo + ' ' + styles.headerInfoBottom}>
				<Logo />
				<Navigation />
				<ButtonCart text={cartData} />
			</div>
			<hr className={styles.headerLine} />
		</div>
	);
};

export default Header;
