import React from 'react';
import styles from './Category.module.scss';
import actionSvg from '../../assets/images/actions.svg';
import pizzaSvg from '../../assets/images/pizza.svg';
import sushiSvg from '../../assets/images/sushi.svg';
import drinkSvg from '../../assets/images/drink.svg';
import zakSvg from '../../assets/images/zak.svg';
import comboSvg from '../../assets/images/combo.svg';
import dessertSvg from '../../assets/images/dessert.svg';
import sousSvg from '../../assets/images/sous.svg';
import { Link } from 'react-router-dom';

const Category: React.FC = () => {
	return (
		<div className={styles.category}>
			<div className={styles.categoryItem}>
				<img src={actionSvg} alt='categoryIcon' />
				<Link to='/redprice'>Акции</Link>
			</div>
			<div className={styles.categoryItem}>
				<img src={pizzaSvg} alt='categoryIcon' />
				<Link to='/pizza'>Пицца</Link>
			</div>
			<div className={styles.categoryItem}>
				<img src={sushiSvg} alt='categoryIcon' />
				<Link to='/sushi'>Суши</Link>
			</div>
			<div className={styles.categoryItem}>
				<img src={drinkSvg} alt='categoryIcon' />
				<Link to='/drink'>Напитки</Link>
			</div>
			<div className={styles.categoryItem}>
				<img src={zakSvg} alt='categoryIcon' />
				<Link to='/zakuski'>Закуски</Link>
			</div>
			<div className={styles.categoryItem}>
				<img src={comboSvg} alt='categoryIcon' />
				<Link to='/combo'>Комбо</Link>
			</div>
			<div className={styles.categoryItem}>
				<img src={dessertSvg} alt='categoryIcon' />
				<Link to='/dessert'>Десерты</Link>
			</div>
			<div className={styles.categoryItem}>
				<img src={sousSvg} alt='categoryIcon' />
				<Link to='/sous'>Соусы</Link>
			</div>
		</div>
	);
};

export default Category;
