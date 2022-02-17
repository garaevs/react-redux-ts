import React from 'react';

import styles from './Navigation.module.scss';
import arrowSvg from '../../assets/images/arrow.svg';
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

				<a href='/' className={styles.navLink}>
					Другое
				</a>
				<span>
					<img src={arrowSvg} alt='others' />
					<div className={styles.navOthers}>
						<a href='/' className={styles.navOthersLink}>
							Акции
						</a>
						<a href='/' className={styles.navOthersLink}>
							О компании
						</a>
						<a href='/' className={styles.navOthersLink}>
							Пользовательское соглашение
						</a>
						<a href='/' className={styles.navOthersLink}>
							Условия гарантии
						</a>
						<a href='/' className={styles.navOthersLink}>
							Ресторан
						</a>
						<a href='/' className={styles.navOthersLink}>
							Контакты
						</a>
						<a href='/' className={styles.navOthersLink}>
							Поддержка
						</a>
						<a href='/' className={styles.navOthersLink}>
							Отследить заказ
						</a>
					</div>
				</span>
			</span>
		</div>
	);
};

export default Navigation;
