import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import AuthForm from './components/AuthForm/AuthForm'
import LoginForm from './components/LoginForm/LoginForm'
import RecoveryForm from './components/RecoveryForm/RecoveryForm'
import UpdatePasswordForm from './components/UpdatePasswordForm/UpdatePasswordForm'

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route exact path="/" component={LoginForm} />
					<Route path="/signup" component={AuthForm} />
					<Route path="/account-recovery" component={RecoveryForm} />
					<Route path="/update-password" component={UpdatePasswordForm} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
