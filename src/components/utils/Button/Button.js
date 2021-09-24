import React from 'react'

import styles from './Button.module.scss'

const Button = ({ label, type, disabled }) => {
	return (
		<button className={styles.button} type={type} disabled={disabled}>
			{label}
		</button>
	)
}

export default Button
