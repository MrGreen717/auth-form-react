import {
	FETCH_MESSAGES_REQUEST,
	FETCH_MESSAGES_SUCCESS,
	FETCH_MESSAGES_FAILURE
} from '../constants/constants'

const initialState = {
	loginError: null
}

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_MESSAGES_REQUEST:
			return { ...state, loginError: null }

		case FETCH_MESSAGES_SUCCESS:
			return { ...state, loginError: null }

		case FETCH_MESSAGES_FAILURE:
			return {
				...initialState,
				loginError: '*Неверный пароль, попробуйте снова.'
			}

		default:
			return state
	}
}

export default loginReducer
