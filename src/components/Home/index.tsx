import React from 'react';
import { useAppSelector } from '../../redux/hooks';
import Address from '../address';
import Catalog from '../catalog';
import Category from '../category';
import Footer from '../Footer';
import FooterInfo from '../FooterInfo';
import Header from '../header';
import Sale from '../sale';

const Home: React.FC = () => {
	const { combo, dessert, drink, pizzas, sous, sushi, zakuski } = useAppSelector(
		state => state.getItems.items,
	);
	return (
		<>
			<Header />
			<Category />
			<Sale />
			<Address />
			<Catalog props={pizzas} categoryName={'Пицца'} />
			<Catalog props={sushi} categoryName={'Суши'} />
			<Catalog props={zakuski} categoryName={'Закуски'} />
			<Catalog props={dessert} categoryName={'Десерты'} />
			<Catalog props={drink} categoryName={'Напитки'} />
			<Catalog props={sous} categoryName={'Соусы'} />
			<Catalog props={combo} categoryName={'Комбо'} />
			<FooterInfo />
			<Footer />
		</>
	);
};

export default Home;
