import configureStore from 'redux-mock-store'
import {
	FETCH_MESSAGES_FAILURE,
	FETCH_MESSAGES_REQUEST,
	FETCH_MESSAGES_SUCCESS
} from './../../../src/redux/constants/constants'

import {
	loginRequest,
	loginSuccess,
	loginError
} from './../../../src/redux/actions/userActions'

describe('login store redux', () => {
	const mockStore = configureStore()
	const store = mockStore({})

	const user = {
		email: 'testuser@gmail.com',
		password: '123456'
	}

	beforeEach(() => {
		store.clearActions()
	})

	describe('login actions', () => {
		it('login request action', () => {
			const expectedAction = [
				{
					type: FETCH_MESSAGES_REQUEST,
					user
				}
			]

			store.dispatch(loginRequest(user))

			expect(store.getActions()).toEqual(expectedAction)
		})

		it('login success action', () => {
			const expectedAction = [
				{
					type: FETCH_MESSAGES_SUCCESS,
					user
				}
			]

			store.dispatch(loginSuccess(user))

			expect(store.getActions()).toEqual(expectedAction)
		})

		it('login error action', () => {
			const expectedAction = [
				{
					type: FETCH_MESSAGES_FAILURE
				}
			]

			store.dispatch(loginError())

			expect(store.getActions()).toEqual(expectedAction)
		})
	})
})
