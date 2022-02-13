import React from 'react';
import Button from '../button';
import Footer from '../Footer';
import Header from '../header';
import styles from './Cart.module.scss';

const Cart: React.FC = () => {
	return (
		<>
			<Header />
			<div className={styles.cart}>
				<h1 className={styles.cartTitle}>Ваш заказ</h1>
				<div className={styles.cartBlock}>
					<div className={styles.cartItem}>
						<img src='/assets/images/pizza-1.jpg' alt='imgCart' />
						<div className={styles.cartInfo}>
							<p className={styles.cartTitle}>Пепперони по-деревенски</p>
							<p className={styles.cartSubTitle}>Традиционное тесто, 23 см</p>
						</div>
						<div className={styles.cartButton}>
							<button className={styles.cartButtonMinus}>-</button>
							<p className={styles.cartButtonNumber}>1</p>
							<button className={styles.cartButtonPlus}>+</button>
						</div>
						<p className={styles.cartItemPrice}>399 Р</p>
					</div>
					<div className={styles.cartItem}>
						<img src='/assets/images/pizza-1.jpg' alt='imgCart' />
						<div className={styles.cartInfo}>
							<p className={styles.cartTitle}>Пепперони по-деревенски</p>
							<p className={styles.cartSubTitle}>Традиционное тесто, 23 см</p>
						</div>
						<div className={styles.cartButton}>
							<button className={styles.cartButtonMinus}>-</button>
							<p className={styles.cartButtonNumber}>1</p>
							<button className={styles.cartButtonPlus}>+</button>
						</div>
						<p className={styles.cartItemPrice}>399 ₽</p>
					</div>
					<div className={styles.cartOrder}>
						<span className={styles.cartOrderPrice}>Итого: 2 379 ₽</span>
						<Button name={'Заказать'} />
					</div>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Cart;
