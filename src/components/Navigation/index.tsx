import React from 'react';
import ButtonCart from '../buttoncart';
import Logo from '../Logo';
import styles from './Navigation.module.scss';
import arrowSvg from '../../assets/images/arrow.svg';

const Navigation: React.FC = () => {
	return (
		<div className={styles.navigation}>
			<div className={styles.navigationInfo}>
				<Logo />
				<span className={styles.navLinkBlock}>
					<a href='/' className={styles.navLink}>
						Пицца
					</a>
					<a href='/' className={styles.navLink}>
						Суши
					</a>
					<a href='/' className={styles.navLink}>
						Напитки
					</a>
					<a href='/' className={styles.navLink}>
						Закуски
					</a>
					<a href='/' className={styles.navLink}>
						Комбо
					</a>
					<a href='/' className={styles.navLink}>
						Десерты
					</a>
					<a href='/' className={styles.navLink}>
						Соусы
					</a>
					<a href='/' className={styles.navLink}>
						Другое
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
					</a>
				</span>
				<ButtonCart text={'0'} />
			</div>
		</div>
	);
};

export default Navigation;
