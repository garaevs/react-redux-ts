import React from 'react';
import styles from './Button.module.scss';

interface buttonProps {
	name: string;
}

const Button: React.FC<buttonProps> = ({ name }) => {
	return (
		<>
			<button type='submit' className={styles.button}>
				{name}
			</button>
		</>
	);
};

export default Button;
