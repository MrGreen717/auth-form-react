import React from 'react'
import { Form, Formik } from 'formik'
import { Link } from 'react-router-dom'
import Button from '../utils/Button/Button'
import FormContainer from '../utils/FormContainer/FormContainer'

function SuccessfulRecovery() {
	return (
		<FormContainer>
			<Formik>
				<Form>
					<strong>
						Ссылка для восстановления отправлена на ваш Email. Проверьте почту.
					</strong>
					<Link to="/">
						<Button label="Перейти на страницу входа" type="button" />
					</Link>
				</Form>
			</Formik>
		</FormContainer>
	)
}

export default SuccessfulRecovery
