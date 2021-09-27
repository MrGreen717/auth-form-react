import React from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { clearMessages, signUpRequest } from './../../redux/actions/userActions'
import { connect } from 'react-redux'
import { Form, Formik } from 'formik'
import FormContainer from '../utils/FormContainer/FormContainer'
import InputField from '../utils/InputField/InputField'
import RedirectPanel from '../utils/RedirectPanel/RedirectPanel'
import Button from '../utils/Button/Button'

function AuthForm({ signUpUser, signUpMessage, clearMessagesValue }) {
	const ValidationSchema = Yup.object().shape({
		email: Yup.string()
			.email('*Введите корректный email')
			.required('*Введите email'),
		password: Yup.string()
			.min(8, '*Пароль должен содержать не менее 8 символов')
			.max(50, '*Пароль не должен быть длиннее 50 символов')
			.matches(
				/^([A-Za-z1-9]*)$/g,
				'*В пароле можно использовать только латинские символы и цифры'
			)
			.matches(/[1-9]/, '*Пароль должен содержать хотя бы одну цифру')
			.matches(/[A-Z]/, '*Пароль должен содержать хотя бы одну заглавную букву')
			.matches(/[a-z]/, '*Пароль должен содержать хотя бы одну строчную букву')
			.required('*Введите пароль'),
		confirmPassword: Yup.string()
			.oneOf([Yup.ref('password'), null], '*Пароли не совпадают')
			.required('*Подтвердите пароль')
	})

	return (
		<FormContainer>
			<Formik
				initialValues={{
					password: '',
					confirmPassword: '',
					email: ''
				}}
				validationSchema={ValidationSchema}
				onSubmit={signUpUser}
			>
				{({ errors, touched, values }) => (
					<Form>
						<h1>Зарегистрироваться</h1>
						<InputField label="Email" type="email" name="email" />
						{errors.email && (touched.email || values.email) ? (
							<strong>{errors.email}</strong>
						) : null}
						<InputField label="Пароль" type="password" name="password" />
						{errors.password && (touched.password || values.password) ? (
							<strong>{errors.password}</strong>
						) : null}
						<InputField
							label="Подтвердите пароль"
							type="password"
							name="confirmPassword"
						/>
						{errors.confirmPassword &&
						(touched.confirmPassword || values.confirmPassword) ? (
							<strong>{errors.confirmPassword}</strong>
						) : null}
						<div>{signUpMessage ? <strong>{signUpMessage}</strong> : null}</div>
						<Button
							label="Зарегистрироваться"
							type="submit"
							disabled={
								(!values.password &&
									!values.email &&
									!values.confirmPassword) ||
								errors.password ||
								errors.email ||
								errors.confirmPassword
							}
						/>
						<RedirectPanel>
							<Link to="/">
								<Button
									label="Войти"
									type="button"
									onSubmit={clearMessagesValue}
								/>
							</Link>
							<Link to="/account-recovery">
								<Button
									label="Забыли пароль?"
									type="button"
									onSubmit={clearMessagesValue}
								/>
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
		signUpMessage: state.signUpMessage
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		signUpUser: (value) => {
			dispatch(signUpRequest(value))
		},
		clearMessagesValue: () => {
			dispatch(clearMessages())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthForm)
