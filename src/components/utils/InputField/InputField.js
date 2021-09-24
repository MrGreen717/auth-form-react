import React from 'react'
import { Field } from 'formik'

import './InputField.scss'

const InputField = ({ label, type, name }) => {
	return (
		<div className="input-panel">
			<label htmlFor={name} className="label">
				{label}:
			</label>
			<Field className="input" id={name} name={name} type={type} />
		</div>
	)
}

export default InputField
