import React from 'react';
import { AddItemsCartPayload } from '../../types/cart';
// import Button from '../button';
import ButtonAddCart from '../ButtonAddCart';
import ButtonFilter from '../ButtonFilter';
import styles from './Catalog.module.scss';

export interface ICatalogProps {
	category: string;
	name: string;
	text?: string;
	picture: string;
	price: number;
	id?: number;
}

export interface IProps {
	props: AddItemsCartPayload[];
	categoryName?: string;
}

const Catalog: React.FC<IProps> = ({ props, categoryName = 'Каталог' }) => {
	return (
		<div className={styles.catalog}>
			<div className={styles.catalogHeader}>
				<h1 className={styles.catalogName}>{categoryName}</h1>
				<ButtonFilter />
			</div>
			<div className={styles.catalogItems}>
				{props.map((item, index) => (
					<div className={styles.catalogItem} key={index}>
						<img src={item.picture} alt='item' />
						<p className={styles.catalogItemTitle}>{item.name}</p>
						<p className={styles.catalogItemSubtitle}>{item.text}</p>
						<div className={styles.catalogItemInfo}>
							<ButtonAddCart name={'Выбрать'} item={item} />
							<p className={styles.catalogItemPrice}>от {item.price} ₽</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Catalog;
