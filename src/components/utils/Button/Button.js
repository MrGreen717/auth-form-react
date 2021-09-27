import React from 'react'

import styles from './Button.module.scss'

const Button = ({ label, type, disabled, onSubmit }) => {
	return (
		<button
			className={styles.button}
			type={type}
			disabled={disabled}
			onClick={onSubmit}
		>
			{label}
		</button>
	)
}

export default Button
