import React from 'react';
import styles from './Shop.module.scss';
import Catalog, { IProps } from '../catalog';
import Footer from '../Footer';
import Header from '../header';

const Shop: React.FC<IProps> = ({ props }) => {
	return (
		<div className={styles.shop}>
			<Header />
			<Catalog props={props} />
			<Footer />
		</div>
	);
};

export default Shop;
