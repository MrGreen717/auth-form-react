import React from 'react'
import * as Yup from 'yup'
import { Field, Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { loginRequest } from './../../redux/actions/userActions'

import './LoginForm.scss'

function LoginForm({ loginUser, loginError }) {
	const ValidationSchema = Yup.object().shape({
		email: Yup.string().email('Invalid email format').required('Required'),
		password: Yup.string().required('Required')
	})

	return (
		<div className="auth">
			<Formik
				initialValues={{
					password: '',
					email: ''
				}}
				validationSchema={ValidationSchema}
				onSubmit={loginUser}
			>
				{({ errors, touched }) => (
					<Form className="form">
						<h1 className="h1">Sign In</h1>
						<div className="input-panel">
							<label htmlFor="email" className="label">
								Email:
							</label>
							<Field className="input" id="email" name="email" type="email" />
						</div>
						<div className="input-panel">
							<label htmlFor="password" className="label">
								Password:
							</label>
							<Field
								className="input"
								id="password"
								name="password"
								type="password"
							/>
						</div>
						{loginError ? (
							<strong className="error">{loginError}</strong>
						) : null}
						<div>
							<button
								className="button"
								type="submit"
								disabled={
									(!touched.password && !touched.email) ||
									errors.password ||
									errors.email
								}
							>
								Sign In
							</button>
						</div>
					</Form>
				)}
			</Formik>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		loginError: state.loginError
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (value) => {
			dispatch(loginRequest(value))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
