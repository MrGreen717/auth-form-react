import * as types from './../constants/constants'

const initialState = {
	loginMessage: null,
	signUpMessage: null,
	updatePasswordMessage: null,
	recoverPasswordMessage: null
}

const loginReducer = (state = initialState, action) => {
	switch (action.type) {
		case types.FETCH_MESSAGES_REQUEST:
			return { ...state, loginMessage: null }

		case types.FETCH_MESSAGES_SUCCESS:
			return { ...state, loginMessage: null }

		case types.FETCH_MESSAGES_FAILURE:
			return {
				...initialState,
				loginMessage: '*Неверный пароль, попробуйте снова.'
			}

		case types.FETCH_SIGNUP_REQUEST:
			return { ...state, signUpMessage: null }

		case types.FETCH_SIGNUP_SUCCESS:
			return { ...state, signUpMessage: null }

		case types.FETCH_SIGNUP_FAILURE:
			return {
				...initialState,
				signUpMessage: '*Пользователь с таким email уже зарегистрирован.'
			}

		case types.FETCH_UPDATE_PASSWORD_SUCCESS:
			return {
				...state
			}

		case types.FETCH_UPDATE_PASSWORD_REQUEST:
			return { ...state, updatePasswordMessage: null }

		case types.FETCH_UPDATE_PASSWORD_FAILURE:
			return {
				...initialState,
				updatePasswordMessage: '*Не удалось изменить пароль, попробуйте снова.'
			}

		case types.FETCH_RECOVER_PASSWORD_REQUEST:
			return { ...state, recoverPasswordMessage: null }

		case types.FETCH_RECOVER_PASSWORD_SUCCESS:
			return { ...state, recoverPasswordMessage: null }

		case types.FETCH_RECOVER_PASSWORD_FAILURE:
			return {
				...initialState,
				recoverPasswordMessage: '*Пользователь с таким email не найден.'
			}

		case types.FETCH_CLEAR_MESSAGES:
			return {
				...state,
				loginMessage: null,
				signUpMessage: null,
				updatePasswordMessage: null,
				recoverPasswordMessage: null
			}

		default:
			return state
	}
}

export default loginReducer
