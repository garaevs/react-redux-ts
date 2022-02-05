import React from 'react';
import Category from './components/category';
import Header from './components/header';
import actionsSvg from './assets/images/actions.svg';
import Sale from './components/sale';
import Address from './components/address';
import Catalog from './components/catalog';
import FooterInfo from './components/FooterInfo';
import Footer from './components/Footer';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Category imgLink={actionsSvg} name={'Акции'} />
			<Sale />
			<Address />
			<Catalog />
			<Catalog />
			<Catalog />
			<Catalog />
			<Catalog />
			<Catalog />
			<Catalog />
			<FooterInfo />
			<Footer />
		</div>
	);
}

export default App;
