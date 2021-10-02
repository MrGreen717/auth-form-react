import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import AuthForm from './components/AuthForm/AuthForm'
import LoginForm from './components/LoginForm/LoginForm'
import RecoveryForm from './components/RecoveryForm/RecoveryForm'
import UpdatePasswordForm from './components/UpdatePasswordForm/UpdatePasswordForm'
import MainPage from './components/MainPage/MainPage'

function App({ user }) {
	return (
		<div className="App">
			<Switch>
				{user ? (
					<>
						<Redirect to="/chat" />
						<Route path="/chat" exact component={MainPage} />
					</>
				) : (
					<>
						<Route path="/" exact component={LoginForm} />
						<Route path="/signup" component={AuthForm} />
						<Route path="/account-recovery" component={RecoveryForm} />
						<Route path="/update-password" component={UpdatePasswordForm} />
					</>
				)}
			</Switch>
		</div>
	)
}

const mapStateToProps = (state) => {
	console.log('STATE: ', state)
	return {
		user: state.user
	}
}

export default connect(mapStateToProps, null)(App)
