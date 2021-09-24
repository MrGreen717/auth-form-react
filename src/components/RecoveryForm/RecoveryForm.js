import React from 'react'
import * as Yup from 'yup'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import InputField from '../utils/InputField/InputField'
import RedirectPanel from '../utils/RedirectPanel/RedirectPanel'
import Button from '../utils/Button/Button'
import FormContainer from '../utils/FormContainer/FormContainer'

function RecoveryForm() {
	const ValidationSchema = Yup.object().shape({
		email: Yup.string()
			.email('*Введите корректный email')
			.required('*Введите email')
	})

	const auth = (values) => {
		console.log(values)
	}

	return (
		<FormContainer>
			<Formik
				initialValues={{
					email: ''
				}}
				validationSchema={ValidationSchema}
				onSubmit={auth}
			>
				{({ errors, touched, values }) => (
					<Form>
						<h1>Восстановить пароль</h1>
						<InputField label="Email" type="email" name="email" />
						{errors.email && (touched.email || values.email) ? (
							<strong>{errors.email}</strong>
						) : null}
						<Button
							label="Отправить ссылку для восстановления"
							type="submit"
							disabled={errors.email || !values.email}
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

export default RecoveryForm
