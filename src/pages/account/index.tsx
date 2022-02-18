import React from 'react';
import axios from 'axios';

import Button from '../../components/button';
import Footer from '../../components/Footer';
import Header from '../../components/header';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import styles from './Account.module.scss';
import { ordersAction } from '../../redux/actions/orders';

const Account: React.FC = () => {
	const dispatch = useAppDispatch();
	const orderListData = useAppSelector(state => state.orderItems.orders);

	React.useEffect(() => {
		async function loadOrders() {
			const orderList = await axios.get('/orders').then(({ data }) => data);
			dispatch(ordersAction(orderList));
		}
		loadOrders();
	}, []);

	return (
		<>
			<Header />
			<div className={styles.account}>
				<h2 className={styles.accountName}>Личный кабинет</h2>
				<div>
					{orderListData.map(item => (
						<p>Количество заказов: {item.id}</p>
					))}
				</div>
				<Button name={'Отследить заказ'} />
			</div>
			<Footer />
		</>
	);
};

export default Account;
