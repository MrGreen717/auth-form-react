import React from 'react'
import { Switch, Route } from 'react-router-dom'
import AuthForm from './components/AuthForm/AuthForm'
import LoginForm from './components/LoginForm/LoginForm'
import RecoveryForm from './components/RecoveryForm/RecoveryForm'
import UpdatePasswordForm from './components/UpdatePasswordForm/UpdatePasswordForm'
import MainPage from './components/MainPage/MainPage'
import SuccessfulRecovery from './components/SuccessfulRecovery/SuccessfulRecovery'

function App() {
	return (
		<div className="App">
			<Switch>
				<Route path="/" exact component={LoginForm} />
				<Route path="/signup" component={AuthForm} />
				<Route path="/account-recovery" component={RecoveryForm} />
				<Route
					path="/account-recovery-success"
					component={SuccessfulRecovery}
				/>
				<Route path="/update-password" component={UpdatePasswordForm} />
				<Route path="/chat" exact component={MainPage} />
			</Switch>
		</div>
	)
}

export default App
