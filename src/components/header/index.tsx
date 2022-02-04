import React from 'react';
import styles from './Header.module.scss';
import accountSvg from '../../assets/images/account.svg';
import pizzaSvg from '../../assets/images/pizza.svg';
import shoppingCartSvg from '../../assets/images/shopping-bag.svg';
import locationSvg from '../../assets/images/location.svg';
import arrowDownSvg from '../../assets/images/arrow-down.svg';
import ButtonCart from '../buttoncart';

const Header: React.FC = () => {
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
						Войти в аккаунт
					</p>
				</div>
			</div>
			<hr className={styles.headerLine} />
			<div className={styles.headerInfo + ' ' + styles.headerInfoBottom}>
				<div className={styles.headerLogo}>
					<img src={pizzaSvg} alt='pizza' />
					<p>Куда пицца</p>
				</div>
				<ButtonCart imgLink={shoppingCartSvg} text={'0'} />
			</div>
			<hr className={styles.headerLine} />
		</div>
	);
};

export default Header;