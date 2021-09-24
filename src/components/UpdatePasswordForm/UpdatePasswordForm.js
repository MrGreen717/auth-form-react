import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import InputField from '../utils/InputField/InputField'
import RedirectPanel from '../utils/RedirectPanel/RedirectPanel'
import Button from '../utils/Button/Button'
import FormContainer from '../utils/FormContainer/FormContainer'

function UpdatePasswordForm() {
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

	const auth = (values) => {
		console.log(values)
	}

	return (
		<FormContainer>
			<Formik
				initialValues={{
					password: '',
					confirmPassword: ''
				}}
				validationSchema={ValidationSchema}
				onSubmit={auth}
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
						<Button
							label="Обновить пароль"
							type="submit"
							disabled={
								(!values.password && !values.confirmPassword) ||
								errors.password ||
								errors.confirmPassword
							}
						/>
						<RedirectPanel>
							<Link to="/">
								<Button label="Войти" type="button" />
							</Link>
							<Link to="/signup">
								<Button label="Регистрация" type="button" />
							</Link>
						</RedirectPanel>
					</Form>
				)}
			</Formik>
		</FormContainer>
	)
}

export default UpdatePasswordForm
