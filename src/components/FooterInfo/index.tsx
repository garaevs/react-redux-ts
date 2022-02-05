import React from 'react';
import styles from './FooterInfo.module.scss';

const FooterInfo: React.FC = () => {
	return (
		<div className={styles.footerInfo}>
			<h1 className={styles.footerInfoTitle}>Доставка пиццы в Москве</h1>
			<p className={styles.footerInfoText}>
				Захотелось чего-то вкусного и сытного? Желание простое и понятное, только в холодильнике все
				не то, и до магазина идти лень. Все пропало? Нет. Недорого заказать пиццу в Москве очень
				просто! Вам на помощь спешит супергерой – Domino’s Pizza! Как у всякого супергероя, у
				Domino’s Pizza есть свои суперсилы: восхитительный вкус продукции из отборных ингредиентов;
				широкий ассортимент, включающий легендарные, фирменные и классические виды, для
				вегетарианцев и любителей экспериментировать; быстрая и бесплатная доставка пиццы в течение
				30 минут, чтобы вкусное и ароматное блюдо не успевало остыть.
				<br />
				<br />
				<b>Как сделать заказ</b>
				<br />
				<br />
				Доставка пиццы от Domino’s – это когда Вам не нужно никуда ехать или звонить, ведь есть
				Интернет. Никогда еще заказ пиццы на дом в Москве не был таким простым! Чтобы заказать пиццу
				онлайн, Вам необходимо: выбрать понравившийся вариант и количество порций; положить желаемое
				в «Корзину»; не уходить далеко, так как вкусная пицца на заказ с доставкой уже мчится к Вам
				из ближайшей пиццерии Domino’s. И не забудьте оплатить заказ курьеру!
			</p>
		</div>
	);
};

export default FooterInfo;
