import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { connect } from 'react-redux'
import { loginRequest } from './../../redux/actions/userActions'
import { Link } from 'react-router-dom'
import InputField from '../utils/InputField/InputField'
import Button from '../utils/Button/Button'
import RedirectPanel from '../utils/RedirectPanel/RedirectPanel'
import FormContainer from '../utils/FormContainer/FormContainer'

import googleIcon from '../icons/Google_Logo.svg'
import vkIcon from '../icons/Vk_Logo.svg'

function LoginForm({ loginUser, loginError }) {
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

						<div>{loginError ? <strong>{loginError}</strong> : null}</div>

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
								<Button label="Зарегистрироваться" type="button" />
							</Link>
							<img src={googleIcon} alt="google logo" />
							<img src={vkIcon} alt="vk logo" />

							<Link to="account-recovery">
								<Button label="Забыли пароль?" type="button" />
							</Link>
						</RedirectPanel>
					</Form>
				)}
			</Formik>
		</FormContainer>
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
