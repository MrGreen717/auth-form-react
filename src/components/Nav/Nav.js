import React from 'react'
import Button from './../utils/Button/Button'

import styles from './Nav.module.scss'

function Nav() {
	return (
		<nav className={styles.nav}>
			<Button label="Активные" type="submit" />
			<Button label="Завершенные" type="submit" />
			<Button label="Сохранённые" type="submit" />
		</nav>
	)
}

export default Nav
