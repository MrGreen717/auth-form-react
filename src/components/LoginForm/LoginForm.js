import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { connect } from 'react-redux'
import {
	loginRequest,
	clearMessages,
	googleAuthRequest
} from './../../redux/actions/userActions'
import { Link } from 'react-router-dom'
import InputField from '../utils/InputField/InputField'
import Button from '../utils/Button/Button'
import RedirectPanel from '../utils/RedirectPanel/RedirectPanel'
import FormContainer from '../utils/FormContainer/FormContainer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import googleIcon from '../icons/Google_Logo.svg'

function LoginForm({
	loginUser,
	loginMessage,
	clearMessagesValue,
	googleAuth
}) {
	const ValidationSchema = Yup.object().shape({
		email: Yup.string()
			.email('*Введите корректный email')
			.required('*Введите email'),
		password: Yup.string().required('*Введите пароль')
	})

	return (
		<FormContainer>
			<Formik
				initialValues={{
					password: '',
					email: ''
				}}
				validationSchema={ValidationSchema}
				onSubmit={loginUser}
			>
				{({ errors, touched, values }) => (
					<Form>
						<h1>Войти</h1>
						<InputField label="Email" type="email" name="email" />
						{errors.email && (touched.email || values.email) ? (
							<strong>{errors.email}</strong>
						) : null}
						<InputField label="Пароль" type="password" name="password" />
						{errors.password && (touched.password || values.password) ? (
							<strong>{errors.password}</strong>
						) : null}

						<div>{loginMessage ? <strong>{loginMessage}</strong> : null}</div>

						<Button
							label="Войти"
							type="submit"
							disabled={
								(!values.password && !values.email) ||
								errors.password ||
								errors.email
							}
						/>
						<RedirectPanel>
							<Link to="signup">
								<Button
									label="Зарегистрироваться"
									type="submit"
									onSubmit={clearMessagesValue}
								/>
							</Link>
							<img src={googleIcon} alt="google logo" onClick={googleAuth} />

							<Link to="account-recovery">
								<Button
									label="Забыли пароль?"
									type="submit"
									onSubmit={clearMessagesValue}
								/>
							</Link>
						</RedirectPanel>
					</Form>
				)}
			</Formik>
			<ToastContainer />
		</FormContainer>
	)
}

const mapStateToProps = (state) => {
	return {
		loginMessage: state.loginMessage
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		loginUser: (value) => {
			dispatch(loginRequest(value))
		},
		clearMessagesValue: () => {
			dispatch(clearMessages())
		},
		googleAuth: () => {
			dispatch(googleAuthRequest())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm)
