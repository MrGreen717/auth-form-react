import { mount } from 'enzyme'
import LoginForm from '../../src/components/LoginForm/LoginForm'
import React from 'react'
import configureStore from 'redux-mock-store'
import { Provider } from 'react-redux'
import { mapDispatchToProps } from './../../src/components/LoginForm/LoginForm'
import { loginRequest } from './../../src/redux/actions/userActions'
import { waitFor } from '@testing-library/react'

describe('<LoginForm />', () => {
	const mockStore = configureStore()

	it('login component was rendered', () => {
		const store = mockStore({})
		const wrapper = mount(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)

		expect(wrapper).toBeDefined()
		expect(wrapper.find('form')).toHaveLength(1)
	})

	it('dispatch action', () => {
		const dispatch = jest.fn()

		mapDispatchToProps(dispatch).loginUser()
		expect(dispatch.mock.calls[0][0]).toEqual(loginRequest())
	})

	it('submit form', async () => {
		const handleSubmit = jest.fn()
		const store = mockStore({})
		const wrapper = mount(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)

		wrapper.find('form').simulate('submit', { preventDefault: handleSubmit })

		await waitFor(() => {
			expect(handleSubmit).toHaveBeenCalledTimes(1)
		})
	})

	it('error rendered', async () => {
		const initialState = { loginError: 'Wrong password, try again.' }
		const store = mockStore(initialState)

		const wrapper = mount(
			<Provider store={store}>
				<LoginForm />
			</Provider>
		)

		await waitFor(() => {
			expect(wrapper.find('strong')).toHaveLength(1)
		})
	})
})
