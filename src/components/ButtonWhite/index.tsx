import React from 'react';
import styles from './ButtonWhite.module.scss';

interface ButtonWhiteProps {
	name: string;
}

const ButtonWhite: React.FC<ButtonWhiteProps> = ({ name }) => {
	return (
		<button type='submit' className={styles.button}>
			{name}
		</button>
	);
};

export default ButtonWhite;
