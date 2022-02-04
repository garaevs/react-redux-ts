import React from 'react';
import Category from './components/category';
import Header from './components/header';
import actionsSvg from './assets/images/actions.svg';
import Sale from './components/sale';

function App() {
	return (
		<div className='wrapper'>
			<Header />
			<Category imgLink={actionsSvg} name={'Акции'} />
			<Sale />
		</div>
	);
}

export default App;
