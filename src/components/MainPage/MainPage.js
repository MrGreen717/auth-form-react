import React from 'react'

import styles from './MainPage.module.scss'
import Button from './../utils/Button/Button'
import { logOutRequest } from '../../redux/actions/userActions'
import { connect } from 'react-redux'

function MainPage({ logOut }) {
	return (
		<div className={styles.mainPage}>
			<header className={styles.header}>
				<div className={styles.userInfo}>
					<div className={styles.email}>email</div>
					<Button
						className={styles.button}
						label="Выход"
						type="submit"
						onSubmit={logOut}
					/>
				</div>
				<div className={styles.infoPanel}>
					<h1>Some information</h1>
				</div>
			</header>
			<nav className={styles.nav}>
				<Button label="Активные" type="submit" />
				<Button label="Завершенные" type="submit" />
				<Button label="Сохранённые" type="submit" />
			</nav>
			<main className={styles.main}>
				<div className={styles.body}>Пока что тут пусто</div>
			</main>
		</div>
	)
}

export const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => {
			dispatch(logOutRequest())
		}
	}
}

export default connect(null, mapDispatchToProps)(MainPage)
