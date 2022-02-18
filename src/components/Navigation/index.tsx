import React from 'react';

import styles from './Navigation.module.scss';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
	return (
		<div className={styles.navigation}>
			<span className={styles.navLinkBlock}>
				<Link to='/pizza' className={styles.navLink}>
					Пицца
				</Link>
				<Link to='/sushi' className={styles.navLink}>
					Суши
				</Link>
				<Link to='/drink' className={styles.navLink}>
					Напитки
				</Link>
				<Link to='/zakuski' className={styles.navLink}>
					Закуски
				</Link>
				<Link to='/combo' className={styles.navLink}>
					Комбо
				</Link>
				<Link to='/dessert' className={styles.navLink}>
					Десерты
				</Link>
				<Link to='/sous' className={styles.navLink}>
					Соусы
				</Link>
			</span>
		</div>
	);
};

export default Navigation;
