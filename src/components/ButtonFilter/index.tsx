import React from 'react';
import styles from './ButtonFilter.module.scss';
import filterSvg from '../../assets/images/filter.svg';

const ButtonFilter: React.FC = () => {
	return (
		<>
			<button className={styles.buttonFilter}>
				<img src={filterSvg} alt='filter' /> Фильтры
			</button>
		</>
	);
};

export default ButtonFilter;
