import { mount } from 'enzyme'
import LoginForm from '../../src/components/LoginForm/LoginForm'
import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mapDispatchToProps } from './../../src/components/LoginForm/LoginForm'
import {
	loginRequest,
	clearMessages,
	googleAuthRequest
} from './../../src/redux/actions/userActions'
import { waitFor } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'

describe('<LoginForm />', () => {
	const mockStore = configureStore()

	it('login component was rendered', () => {
		const store = mockStore({})
		const wrapper = mount(
			<BrowserRouter>
				<Provider store={store}>
					<LoginForm />
				</Provider>
			</BrowserRouter>
		)

		expect(wrapper).toBeDefined()
		expect(wrapper.find('form')).toHaveLength(1)
	})

	it('dispatch login action', () => {
		const dispatch = jest.fn()

		mapDispatchToProps(dispatch).loginUser()
		mapDispatchToProps(dispatch).clearMessagesValue()
		mapDispatchToProps(dispatch).googleAuth()
		expect(dispatch.mock.calls[0][0]).toEqual(loginRequest())
		expect(dispatch.mock.calls[1][0]).toEqual(clearMessages())
		expect(dispatch.mock.calls[2][0]).toEqual(googleAuthRequest())
	})

	it('submit form', async () => {
		const handleSubmit = jest.fn()
		const store = mockStore({})
		const wrapper = mount(
			<BrowserRouter>
				<Provider store={store}>
					<LoginForm />
				</Provider>
			</BrowserRouter>
		)

		wrapper.find('form').simulate('submit', { preventDefault: handleSubmit })

		await waitFor(() => {
			expect(handleSubmit).toHaveBeenCalledTimes(1)
		})
	})

	it('error rendered', async () => {
		const initialState = { loginMessage: '*Неверный пароль, попробуйте снова.' }
		const store = mockStore(initialState)

		const wrapper = mount(
			<BrowserRouter>
				<Provider store={store}>
					<LoginForm />
				</Provider>
			</BrowserRouter>
		)

		await waitFor(() => {
			expect(wrapper.find('strong')).toHaveLength(1)
		})
	})
})
