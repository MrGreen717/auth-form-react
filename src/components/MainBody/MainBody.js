import React from 'react'
import { logOutRequest } from '../../redux/actions/userActions'
import { connect } from 'react-redux'

import styles from './MainBody.module.scss'

function MainBody({ logOut, user }) {
	return (
		<body className={styles.body}>
			<div className={styles.content}>
				<div>
					<h1>Вы успешно авторизованы</h1>
				</div>
				<div>
					<div>Ваш логин: {user.email}</div>
					<button className={styles.button} type="submit" onClick={logOut}>
						Выход
					</button>
				</div>
			</div>
		</body>
	)
}
const mapStateToProps = (state) => {
	return {
		user: state.user
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		logOut: () => {
			dispatch(logOutRequest())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MainBody)
