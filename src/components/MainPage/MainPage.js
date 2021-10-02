import React from 'react'
import { logOutRequest } from '../../redux/actions/userActions'
import { connect } from 'react-redux'
import Nav from './../Nav/Nav'
import Header from '../Header/Header'
import MainBody from '../MainBody/MainBody'

import styles from './MainPage.module.scss'

function MainPage({ logOut }) {
	return (
		<div className={styles.mainPage}>
			<Header logOut={logOut} />
			<Nav />
			<MainBody />
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
