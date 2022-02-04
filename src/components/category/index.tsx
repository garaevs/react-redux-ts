import React from 'react';
import styles from './Category.module.scss';

interface categoryProps {
	imgLink: string;
	name: string;
}

const Category: React.FC<categoryProps> = ({ imgLink, name }) => {
	return (
		<div className={styles.category}>
			<div className={styles.categoryItem}>
				<img src={imgLink} alt='categoryIcon' />
				<p>{name}</p>
			</div>
			<div className={styles.categoryItem}>
				<img src={imgLink} alt='categoryIcon' />
				<p>{name}</p>
			</div>
			<div className={styles.categoryItem}>
				<img src={imgLink} alt='categoryIcon' />
				<p>{name}</p>
			</div>
			<div className={styles.categoryItem}>
				<img src={imgLink} alt='categoryIcon' />
				<p>{name}</p>
			</div>
			<div className={styles.categoryItem}>
				<img src={imgLink} alt='categoryIcon' />
				<p>{name}</p>
			</div>
			<div className={styles.categoryItem}>
				<img src={imgLink} alt='categoryIcon' />
				<p>{name}</p>
			</div>
			<div className={styles.categoryItem}>
				<img src={imgLink} alt='categoryIcon' />
				<p>{name}</p>
			</div>
			<div className={styles.categoryItem}>
				<img src={imgLink} alt='categoryIcon' />
				<p>{name}</p>
			</div>
		</div>
	);
};

export default Category;
