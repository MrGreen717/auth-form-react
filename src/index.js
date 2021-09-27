import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store, { history } from './redux/store'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'

ReactDOM.render(
	<Provider store={store}>
		<Router history={history}>
			<Route component={App} />
		</Router>
	</Provider>,
	document.getElementById('root')
)
