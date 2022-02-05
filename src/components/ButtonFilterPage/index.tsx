import React from 'react';
import styles from './ButtonFilterPage.module.scss';

interface buttonFilterPageProps {
	name: string;
}

const ButtonFilterPage: React.FC<buttonFilterPageProps> = ({ name }) => {
	return (
		<>
			<button type='submit' className={styles.button}>
				{name}
			</button>
		</>
	);
};

export default ButtonFilterPage;
