import loginReducer from '../../../src/redux/reducers/userReducer'

import * as types from '../../../src/redux/constants/constants'

const user = {
	email: 'testuser@gmail.com',
	password: '123456'
}

const code = '123456'

describe('user reducers', () => {
	describe('login', () => {
		it('user request', () => {
			const action = {
				payload: user,
				type: types.FETCH_MESSAGES_REQUEST
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.loginMessage).toEqual(null)
		})
		it('user success', () => {
			const action = {
				payload: user,
				type: types.FETCH_MESSAGES_SUCCESS
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.loginMessage).toEqual(null)
		})
		it('user error', () => {
			const action = {
				payload: user,
				type: types.FETCH_MESSAGES_FAILURE
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.loginMessage).toEqual(
				'*Неверный пароль, попробуйте снова.'
			)
		})
	})
	describe('google auth', () => {
		it('google auth request', () => {
			const action = {
				type: types.FETCH_GOOGLE_AUTH_REQUEST
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.loginMessage).toEqual(null)
			expect(updatedState.signUpMessage).toEqual(null)
			expect(updatedState.updatePasswordMessage).toEqual(null)
			expect(updatedState.recoverPasswordMessage).toEqual(null)
		})
		it('google auth success', () => {
			const action = {
				type: types.FETCH_GOOGLE_AUTH_SUCCESS
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.loginMessage).toEqual(null)
			expect(updatedState.signUpMessage).toEqual(null)
			expect(updatedState.updatePasswordMessage).toEqual(null)
			expect(updatedState.recoverPasswordMessage).toEqual(null)
		})
	})
	describe('signup', () => {
		it('sign up request', () => {
			const action = {
				payload: user,
				type: types.FETCH_SIGNUP_REQUEST
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.signUpMessage).toEqual(null)
		})
		it('sign up success', () => {
			const action = {
				payload: user,
				type: types.FETCH_SIGNUP_SUCCESS
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.signUpMessage).toEqual(null)
		})
		it('sign up error', () => {
			const action = {
				payload: user,
				type: types.FETCH_SIGNUP_FAILURE
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.signUpMessage).toEqual(
				'*Пользователь с таким email уже зарегистрирован.'
			)
		})
	})
	describe('update password', () => {
		it('update password request', () => {
			const action = {
				payload: user.password,
				code,
				type: types.FETCH_UPDATE_PASSWORD_REQUEST
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.updatePasswordMessage).toEqual(null)
		})
		it('update password success', () => {
			const action = {
				payload: user.password,
				type: types.FETCH_UPDATE_PASSWORD_SUCCESS
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.updatePasswordMessage).toEqual(null)
		})
		it('update password error', () => {
			const action = {
				payload: user.password,
				type: types.FETCH_UPDATE_PASSWORD_FAILURE
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.updatePasswordMessage).toEqual(
				'*Не удалось изменить пароль, попробуйте снова.'
			)
		})
	})
	describe('recover password', () => {
		it('recover password request', () => {
			const action = {
				payload: user.email,
				type: types.FETCH_RECOVER_PASSWORD_REQUEST
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.recoverPasswordMessage).toEqual(null)
		})
		it('recover password success', () => {
			const action = {
				payload: user.email,
				type: types.FETCH_RECOVER_PASSWORD_SUCCESS
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.recoverPasswordMessage).toEqual(null)
		})
		it('recover password error', () => {
			const action = {
				payload: user.email,
				type: types.FETCH_RECOVER_PASSWORD_FAILURE
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.recoverPasswordMessage).toEqual(
				'*Пользователь с таким email не найден.'
			)
		})
	})
	describe('clear messages requests', () => {
		it('recover password request', () => {
			const action = {
				payload: {},
				type: types.FETCH_CLEAR_MESSAGES
			}

			const updatedState = loginReducer(undefined, action)
			expect(updatedState.loginMessage).toEqual(null)
			expect(updatedState.signUpMessage).toEqual(null)
			expect(updatedState.updatePasswordMessage).toEqual(null)
			expect(updatedState.recoverPasswordMessage).toEqual(null)
		})
	})
	it('return state', () => {
		const action = {
			payload: {},
			type: 'default'
		}
		const updatedState = loginReducer(undefined, action)
		expect(updatedState.loginMessage).toEqual(null)
		expect(updatedState.signUpMessage).toEqual(null)
		expect(updatedState.updatePasswordMessage).toEqual(null)
		expect(updatedState.recoverPasswordMessage).toEqual(null)
	})
})
