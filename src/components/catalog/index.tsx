import React from 'react';
import Button from '../button';
import ButtonFilter from '../ButtonFilter';
import styles from './Catalog.module.scss';

const Catalog: React.FC = () => {
	return (
		<div className={styles.catalog}>
			<div className={styles.catalogHeader}>
				<h1 className={styles.catalogName}>Пицца</h1>
				<ButtonFilter />
			</div>
			<div className={styles.catalogItems}>
				<div className={styles.catalogItem}>
					<img src='/assets/images/pizza-1.jpg' alt='item' />

					<p className={styles.catalogItemTitle}>Чикен Сладкий Чили</p>
					<p className={styles.catalogItemSubtitle}>
						Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
					</p>
					<div className={styles.catalogItemInfo}>
						<Button name={'Выбрать'} />
						<p className={styles.catalogItemPrice}>от 399 ₽</p>
					</div>
				</div>
				<div className={styles.catalogItem}>
					<img src='/assets/images/pizza-1.jpg' alt='item' />

					<p className={styles.catalogItemTitle}>Чикен Сладкий Чили</p>
					<p className={styles.catalogItemSubtitle}>
						Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
					</p>
					<div className={styles.catalogItemInfo}>
						<Button name={'Выбрать'} />
						<p className={styles.catalogItemPrice}>от 399 ₽</p>
					</div>
				</div>
				<div className={styles.catalogItem}>
					<img src='/assets/images/pizza-1.jpg' alt='item' />

					<p className={styles.catalogItemTitle}>Чикен Сладкий Чили</p>
					<p className={styles.catalogItemSubtitle}>
						Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
					</p>
					<div className={styles.catalogItemInfo}>
						<Button name={'Выбрать'} />
						<p className={styles.catalogItemPrice}>от 399 ₽</p>
					</div>
				</div>
				<div className={styles.catalogItem}>
					<img src='/assets/images/pizza-1.jpg' alt='item' />

					<p className={styles.catalogItemTitle}>Чикен Сладкий Чили</p>
					<p className={styles.catalogItemSubtitle}>
						Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
					</p>
					<div className={styles.catalogItemInfo}>
						<Button name={'Выбрать'} />
						<p className={styles.catalogItemPrice}>от 399 ₽</p>
					</div>
				</div>
				<div className={styles.catalogItem}>
					<img src='/assets/images/pizza-1.jpg' alt='item' />

					<p className={styles.catalogItemTitle}>Чикен Сладкий Чили</p>
					<p className={styles.catalogItemSubtitle}>
						Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
					</p>
					<div className={styles.catalogItemInfo}>
						<Button name={'Выбрать'} />
						<p className={styles.catalogItemPrice}>от 399 ₽</p>
					</div>
				</div>
				<div className={styles.catalogItem}>
					<img src='/assets/images/pizza-1.jpg' alt='item' />

					<p className={styles.catalogItemTitle}>Чикен Сладкий Чили</p>
					<p className={styles.catalogItemSubtitle}>
						Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
					</p>
					<div className={styles.catalogItemInfo}>
						<Button name={'Выбрать'} />
						<p className={styles.catalogItemPrice}>от 399 ₽</p>
					</div>
				</div>
				<div className={styles.catalogItem}>
					<img src='/assets/images/pizza-1.jpg' alt='item' />

					<p className={styles.catalogItemTitle}>Чикен Сладкий Чили</p>
					<p className={styles.catalogItemSubtitle}>
						Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
					</p>
					<div className={styles.catalogItemInfo}>
						<Button name={'Выбрать'} />
						<p className={styles.catalogItemPrice}>от 399 ₽</p>
					</div>
				</div>
				<div className={styles.catalogItem}>
					<img src='/assets/images/pizza-1.jpg' alt='item' />

					<p className={styles.catalogItemTitle}>Чикен Сладкий Чили</p>
					<p className={styles.catalogItemSubtitle}>
						Курица, Лук, Перец Халапеньо, Сыр Моцарелла, Томатный соу...
					</p>
					<div className={styles.catalogItemInfo}>
						<Button name={'Выбрать'} />
						<p className={styles.catalogItemPrice}>от 399 ₽</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Catalog;
