import React from 'react';
import Button from '../button';
import Footer from '../Footer';
import Header from '../header';
import styles from './CartOrder.module.scss';

const CartOrder: React.FC = () => {
	return (
		<>
			<Header />
			<div className={styles.cartOrder}>
				<img src='/assets/images/order.png' alt='order' />
				<h2 className={styles.cartOrderNumber}>Заказ №310202 принят</h2>
				<p className={styles.cartOrderInfo}>
					Спасибо за заказ! Примерное время доставки 45 минут. Статус отследить можно нажав на
					кнопку ниже
				</p>
				<Button name={'Отследить заказ'} />
			</div>
			<Footer />
		</>
	);
};

export default CartOrder;
