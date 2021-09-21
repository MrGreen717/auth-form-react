import { shallow } from 'enzyme'
import React from 'react'
import LoginForm from '../../src/components/LoginForm/LoginForm'
import App from '../../src/App'

describe('<App />', () => {
	it('app component was rendered', () => {
		const wrapper = shallow(<App />)

		expect(wrapper.find(LoginForm)).toHaveLength(1)
	})
})
