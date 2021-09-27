import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import {
	clearMessages,
	recoverPasswordRequest
} from '../../redux/actions/userActions'
import InputField from '../utils/InputField/InputField'
import RedirectPanel from '../utils/RedirectPanel/RedirectPanel'
import Button from '../utils/Button/Button'
import FormContainer from '../utils/FormContainer/FormContainer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function RecoveryForm({
	recoverPassword,
	recoverPasswordMessage,
	clearMessagesValue
}) {
	const ValidationSchema = Yup.object().shape({
		email: Yup.string()
			.email('*Введите корректный email')
			.required('*Введите email')
	})

	return (
		<FormContainer>
			<Formik
				initialValues={{
					email: ''
				}}
				validationSchema={ValidationSchema}
				onSubmit={recoverPassword}
			>
				{({ errors, touched, values }) => (
					<Form>
						<h1>Восстановить пароль</h1>
						<InputField label="Email" type="email" name="email" />
						{errors.email && (touched.email || values.email) ? (
							<strong>{errors.email}</strong>
						) : null}
						<div>
							{recoverPasswordMessage ? (
								<strong>{recoverPasswordMessage}</strong>
							) : null}
						</div>
						<Button
							label="Отправить ссылку для восстановления"
							type="submit"
							disabled={errors.email || !values.email}
						/>
						<RedirectPanel>
							<Link to="/">
								<Button
									label="Войти"
									type="button"
									onSubmit={clearMessagesValue}
								/>
							</Link>
							<Link to="/signup">
								<Button
									label="Регистрация"
									type="button"
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
		recoverPasswordMessage: state.recoverPasswordMessage
	}
}

export const mapDispatchToProps = (dispatch) => {
	return {
		recoverPassword: (value) => {
			dispatch(recoverPasswordRequest(value))
		},
		clearMessagesValue: () => {
			dispatch(clearMessages())
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(RecoveryForm)
