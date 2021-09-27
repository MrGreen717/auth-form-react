import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { updatePasswordRequest } from './../../redux/actions/userActions'
import { connect } from 'react-redux'
import qs from 'query-string'
import InputField from '../utils/InputField/InputField'
import Button from '../utils/Button/Button'
import FormContainer from '../utils/FormContainer/FormContainer'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function UpdatePasswordForm(props) {
	const { changePassword, updatePasswordMessage } = props
	const code = qs.parse(props.location.search).oobCode

	const ValidationSchema = Yup.object().shape({
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
					confirmPassword: ''
				}}
				validationSchema={ValidationSchema}
				onSubmit={(value) => changePassword(value, code)}
			>
				{({ errors, touched, values }) => (
					<Form>
						<h1>Обновить пароль</h1>
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
						<div>
							{updatePasswordMessage ? (
								<strong>{updatePasswordMessage}</strong>
							) : null}
						</div>
						<Button
							label="Обновить пароль"
							type="submit"
							disabled={
								(!values.password && !values.confirmPassword) ||
								errors.password ||
								errors.confirmPassword
							}
						/>
					</Form>
				)}
			</Formik>

			<ToastContainer />
		</FormContainer>
	)
}

const mapStateToProps = (state) => {
	return {
		updatePasswordMessage: state.updatePasswordMessage
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		changePassword: (value, code) => {
			dispatch(updatePasswordRequest(value, code))
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdatePasswordForm)
