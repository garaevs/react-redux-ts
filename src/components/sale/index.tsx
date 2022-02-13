import React from 'react';
import styles from './Sale.module.scss';

const Sale: React.FC = () => {
	return (
		<div className={styles.sale}>
			<div className={styles.saleItem + ' ' + styles.saleItemOne}>
				<p>3 средние пиццы от 999 рублей</p>
			</div>
			<div className={styles.saleItem + ' ' + styles.saleItemTwo}>
				<p>Кэшбек 10% на самовывоз (доставка)</p>
			</div>
			<div className={styles.saleItem + ' ' + styles.saleItemThree}>
				<p>3 средние пиццы от 999 рублей</p>
			</div>
			<div className={styles.saleItem + ' ' + styles.saleItemFore}>
				<p>3 средние пиццы от 999 рублей</p>
			</div>
		</div>
	);
};

export default Sale;
