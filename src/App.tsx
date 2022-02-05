import React from 'react';
import Category from './components/category';
import Header from './components/header';
import actionsSvg from './assets/images/actions.svg';
import Sale from './components/sale';
import Address from './components/address';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Category imgLink={actionsSvg} name={'Акции'} />
			<Sale />
			<Address />
		</div>
	);
}

export default App;
