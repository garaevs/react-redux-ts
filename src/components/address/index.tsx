import React from 'react';
import styles from './Address.module.scss';
import locationSvg from '../../assets/images/location.svg';
import Button from '../button';

const Address: React.FC = () => {
	return (
		<div className={styles.address}>
			<p>Проверить адрес доставки</p>
			<form className={styles.addresInput}>
				<img src={locationSvg} alt='location' />
				<input type='text' placeholder='Адрес' />
				<Button name={'Проверить'} />
			</form>
		</div>
	);
};

export default Address;
