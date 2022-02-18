import React from 'react';

import Footer from '../../components/Footer';
import Header from '../../components/header';
import styles from './Garant.module.scss';

const Garant: React.FC = () => {
	return (
		<>
			<Header />
			<div className={styles.about}>
				<h2 className={styles.aboutTitle}>Про компанию</h2>
				<div className={styles.aboutInfo}>
					<p>Гарантия качества</p>
					<p>
						Главное правило «Транспиццы» - классика в выборе ингредиентов: натуральные продукты,
						соусы без усилителей вкуса, сыры без добавления растительных жиров. Мы готовим пиццу в
						итальянской печи по традиционным рецептам, которые лучше всего передают вкус и аромат
						отборных ингредиентов - пепперони, пармезана, моцареллы, и спелых томатов.
					</p>
					<p>
						Хотите добавить к классическому рецепту свой секретный компонент? Выберите тесто основы
						- тонкое, среднее или пышное, дополните базовую рецептуру любыми ингредиентами по своему
						выбору и приготовьте пиццу мечты на нашей кухне. Не пройдет и часа, как в вашу дверь
						позвонит курьер с ароматно пахнущей коробкой.
					</p>
					<p>
						Вкусно? Можете попробовать себя в роли шеф-повара. Читайте статьи, готовьте по
						проверенным рецептам и угощайте друзей домашней пиццей. Если приготовите домашний шедевр
						с необычной начинкой, поделитесь с нами своими идеями. На Сицилии уже давно пекут пиццу
						с килькой, а в Бразилии – со свеклой и зеленым горошком. Возможно, именно вы станете
						основоположником нового тренда. А пока можно заказать свежую, горячую, сытную пиццу с
						доставкой на дом.
					</p>
				</div>
			</div>
			<Footer />
		</>
	);
};

export default Garant;