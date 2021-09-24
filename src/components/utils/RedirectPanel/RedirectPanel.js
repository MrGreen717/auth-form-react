import React from 'react'

import styles from './RedirectPanel.module.scss'

const RedirectPanel = (props) => {
	return <div className={styles.redirectPanel}>{props.children}</div>
}

export default RedirectPanel
