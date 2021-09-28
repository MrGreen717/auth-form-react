import configureStore from 'redux-mock-store'
import * as types from '../../../src/redux/constants/constants'

import * as actions from '../../../src/redux/actions/userActions'

describe('login store redux', () => {
	const mockStore = configureStore()
	const store = mockStore({})

	const user = {
		email: 'testuser@gmail.com',
		password: '123456'
	}

	const code = '123456'

	beforeEach(() => {
		store.clearActions()
	})

	describe('login actions', () => {
		describe('login actions', () => {
			it('login request action', () => {
				const expectedAction = [
					{
						type: types.FETCH_MESSAGES_REQUEST,
						user
					}
				]
				store.dispatch(actions.loginRequest(user))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('login success action', () => {
				const expectedAction = [
					{
						type: types.FETCH_MESSAGES_SUCCESS,
						user
					}
				]
				store.dispatch(actions.loginSuccess(user))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('login error action', () => {
				const expectedAction = [
					{
						type: types.FETCH_MESSAGES_FAILURE
					}
				]
				store.dispatch(actions.loginError())
				expect(store.getActions()).toEqual(expectedAction)
			})
		})
		describe('google auth actions', () => {
			it('google auth request action', () => {
				const expectedAction = [
					{
						type: types.FETCH_GOOGLE_AUTH_REQUEST
					}
				]
				store.dispatch(actions.googleAuthRequest())
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('google auth success action', () => {
				const expectedAction = [
					{
						type: types.FETCH_GOOGLE_AUTH_SUCCESS
					}
				]
				store.dispatch(actions.googleAuthSuccess())
				expect(store.getActions()).toEqual(expectedAction)
			})
		})
		describe('signup actions', () => {
			it('signup request action', () => {
				const expectedAction = [
					{
						type: types.FETCH_SIGNUP_REQUEST,
						user
					}
				]
				store.dispatch(actions.signUpRequest(user))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('signup success action', () => {
				const expectedAction = [
					{
						type: types.FETCH_SIGNUP_SUCCESS,
						user
					}
				]
				store.dispatch(actions.signUpSuccess(user))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('signup error action', () => {
				const expectedAction = [
					{
						type: types.FETCH_SIGNUP_FAILURE
					}
				]
				store.dispatch(actions.singUpError())
				expect(store.getActions()).toEqual(expectedAction)
			})
		})
		describe('update password actions', () => {
			it('update password request action', () => {
				const expectedAction = [
					{
						type: types.FETCH_UPDATE_PASSWORD_REQUEST,
						password: user.password,
						code
					}
				]
				store.dispatch(actions.updatePasswordRequest(user.password, code))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('update password success action', () => {
				const expectedAction = [
					{
						type: types.FETCH_UPDATE_PASSWORD_SUCCESS,
						password: user.password
					}
				]
				store.dispatch(actions.updatePasswordSuccess(user.password))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('update password error action', () => {
				const expectedAction = [
					{
						type: types.FETCH_UPDATE_PASSWORD_FAILURE
					}
				]
				store.dispatch(actions.updatePasswordError())
				expect(store.getActions()).toEqual(expectedAction)
			})
		})
		describe('recovery password actions', () => {
			it('recovery password request action', () => {
				const expectedAction = [
					{
						type: types.FETCH_RECOVER_PASSWORD_REQUEST,
						email: user.email
					}
				]
				store.dispatch(actions.recoverPasswordRequest(user.email))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('recovery password success action', () => {
				const expectedAction = [
					{
						type: types.FETCH_RECOVER_PASSWORD_SUCCESS,
						email: user.email
					}
				]
				store.dispatch(actions.recoverPasswordSuccess(user.email))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('recovery password error action', () => {
				const expectedAction = [
					{
						type: types.FETCH_RECOVER_PASSWORD_FAILURE
					}
				]
				store.dispatch(actions.recoverPasswordError())
				expect(store.getActions()).toEqual(expectedAction)
			})
		})
		describe('clear messages actions', () => {
			it('clear messages request action', () => {
				const expectedAction = [
					{
						type: types.FETCH_CLEAR_MESSAGES
					}
				]
				store.dispatch(actions.clearMessages(user))
				expect(store.getActions()).toEqual(expectedAction)
			})
			it('clear messages success action', () => {
				const expectedAction = [
					{
						type: types.FETCH_CLEAR_MESSAGES_SUCCESS
					}
				]
				store.dispatch(actions.clearMessagesSuccess(user))
				expect(store.getActions()).toEqual(expectedAction)
			})
		})
	})
})
