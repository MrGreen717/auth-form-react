import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import store, { history } from './redux/store'
import { Provider } from 'react-redux'
import { Router, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './redux/store'

ReactDOM.render(
	<Provider store={store}>
		<PersistGate loading={null} persistor={persistor}>
			<Router history={history}>
				<Route component={App} />
			</Router>
		</PersistGate>
	</Provider>,
	document.getElementById('root')
)
