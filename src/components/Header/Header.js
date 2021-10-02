import React from 'react'

import styles from './Header.module.scss'

function Header({ logOut }) {
	return (
		<header className={styles.header}>
			<div className={styles.userInfo}>
				<div className={styles.email}>email</div>
				<button className={styles.button} type="submit" onClick={logOut}>
					Выход
				</button>
			</div>
			<div className={styles.infoPanel}>
				<h1>Some information</h1>
			</div>
		</header>
	)
}

export default Header
