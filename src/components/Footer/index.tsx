import React from 'react';
import Logo from '../Logo';
import styles from './Footer.module.scss';
import mobileSvg from '../../assets/images/mobile.svg';
import locationfSvg from '../../assets/images/location-f.svg';
import facebookSvg from '../../assets/images/facebook.svg';
import instaSvg from '../../assets/images/instagram.svg';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.footerLogo}>
				<Logo />
				<p className={styles.footerLogoCopyright}>© Copyright 2021 — Куда Пицца</p>
			</div>
			<div className={styles.footerItem}>
				<h2>Куда пицца</h2>
				<Link to={'/about'} className={styles.footerItemLink}>
					О компании
				</Link>
				<Link to={'/info'} className={styles.footerItemLink}>
					Пользовательское соглашение
				</Link>
				<Link to={'/garant'} className={styles.footerItemLink}>
					Условия гарантии
				</Link>
			</div>
			<div className={styles.footerItem}>
				<h2>Помощь</h2>
				<a href='/' className={styles.footerItemLink}>
					Ресторан
				</a>
				<a href='/' className={styles.footerItemLink}>
					Контакты
				</a>
				<a href='/' className={styles.footerItemLink}>
					Поддержка
				</a>
				<a href='/' className={styles.footerItemLink}>
					Отследить заказ
				</a>
			</div>
			<div className={styles.footerItem}>
				<h2>Контакты</h2>
				<div className={styles.footerItemContact}>
					<img src={mobileSvg} alt='mobile' />
					<p>+7 (926) 223-10-11</p>
				</div>
				<div className={styles.footerItemContact}>
					<img src={locationfSvg} alt='location' />
					<p>Москва, ул. Юных Ленинцев, д.99</p>
				</div>
				<div className={styles.footerSocial}>
					<div className={styles.footerItemSocial}>
						<img src={facebookSvg} alt='fb' />
						<p>Facebok</p>
					</div>
					<div className={styles.footerItemSocial}>
						<img src={instaSvg} alt='instagram' />
						<p>Instagram</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
