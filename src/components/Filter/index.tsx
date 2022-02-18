import React from 'react';
import Button from '../button';
import ButtonFilterPage from '../ButtonFilterPage';
import ButtonWhite from '../ButtonWhite';
import styles from './Filter.module.scss';

const Filter: React.FC = () => {
	return (
		<div className={styles.overlay}>
			<div className={styles.filter}>
				<h1 className={styles.filterTitle}>Фильтры</h1>
				<div className={styles.filterBlock}>
					<p className={styles.filterName}>Общее</p>
					<ButtonFilterPage name={'Хит'} />
					<ButtonFilterPage name={'Новинка'} />
					<ButtonFilterPage name={'С мясом'} />
					<ButtonFilterPage name={'Вегетарианская'} />
					<ButtonFilterPage name={'С курицей'} />
					<ButtonFilterPage name={'Без лука'} />
					<ButtonFilterPage name={'С грибами'} />
					<ButtonFilterPage name={'С морепродуктами'} />
					<ButtonFilterPage name={'Барбекю'} />
				</div>
				<div className={styles.filterBlock}>
					<p className={styles.filterName}>Общее</p>
					<ButtonFilterPage name={'Хит'} />
					<ButtonFilterPage name={'Новинка'} />
					<ButtonFilterPage name={'С мясом'} />
					<ButtonFilterPage name={'Вегетарианская'} />
					<ButtonFilterPage name={'С курицей'} />
					<ButtonFilterPage name={'Без лука'} />
					<ButtonFilterPage name={'С грибами'} />
					<ButtonFilterPage name={'С морепродуктами'} />
					<ButtonFilterPage name={'Барбекю'} />
				</div>
				<div className={styles.filterBlock}>
					<p className={styles.filterName}>Общее</p>
					<ButtonFilterPage name={'Хит'} />
					<ButtonFilterPage name={'Новинка'} />
					<ButtonFilterPage name={'С мясом'} />
					<ButtonFilterPage name={'Вегетарианская'} />
					<ButtonFilterPage name={'С курицей'} />
					<ButtonFilterPage name={'Без лука'} />
					<ButtonFilterPage name={'С грибами'} />
					<ButtonFilterPage name={'С морепродуктами'} />
					<ButtonFilterPage name={'Барбекю'} />
				</div>
				<div className={styles.filterFooter}>
					<ButtonWhite name={'Сбросить'} />
					<Button name={'Применить'} />
				</div>
			</div>
		</div>
	);
};

export default Filter;
