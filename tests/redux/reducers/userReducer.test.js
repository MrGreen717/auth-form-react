import loginReducer from './../../../src/redux/reducers/userReducer'

import {
	FETCH_MESSAGES_FAILURE,
	FETCH_MESSAGES_REQUEST,
	FETCH_MESSAGES_SUCCESS
} from './../../../src/redux/constants/constants'

const user = {
	email: 'testuser@gmail.com',
	password: '123456'
}

describe('user reducers', () => {
	it('user request', () => {
		const action = {
			payload: user,
			type: FETCH_MESSAGES_REQUEST
		}

		const updatedState = loginReducer(undefined, action)
		expect(updatedState.loginError).toEqual(null)
	})
	it('user success', () => {
		const action = {
			payload: user,
			type: FETCH_MESSAGES_SUCCESS
		}

		const updatedState = loginReducer(undefined, action)
		expect(updatedState.loginError).toEqual(null)
	})
	it('user error', () => {
		const action = {
			payload: user,
			type: FETCH_MESSAGES_FAILURE
		}

		const updatedState = loginReducer(undefined, action)
		expect(updatedState.loginError).toEqual(
			'*Неверный пароль, попробуйте снова.'
		)
	})
	it('return state', () => {
		const action = {
			payload: {},
			type: 'default'
		}
		const updatedState = loginReducer(undefined, action)
		expect(updatedState.loginError).toEqual(null)
	})
})
