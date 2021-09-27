import * as types from './../constants/constants'

export const loginRequest = (user) => {
	return {
		type: types.FETCH_MESSAGES_REQUEST,
		user
	}
}

export const loginSuccess = (user) => {
	return {
		type: types.FETCH_MESSAGES_SUCCESS,
		user
	}
}

export const loginError = (error) => {
	return {
		type: types.FETCH_MESSAGES_FAILURE,
		error
	}
}

export const signUpRequest = (user) => {
	return {
		type: types.FETCH_SIGNUP_REQUEST,
		user
	}
}

export const signUpSuccess = (user) => {
	return {
		type: types.FETCH_SIGNUP_SUCCESS,
		user
	}
}

export const singUpError = (error) => {
	return {
		type: types.FETCH_SIGNUP_FAILURE,
		error
	}
}

export const updatePasswordRequest = (password, code) => {
	return {
		type: types.FETCH_UPDATE_PASSWORD_REQUEST,
		password,
		code
	}
}

export const updatePasswordSuccess = (password) => {
	return {
		type: types.FETCH_UPDATE_PASSWORD_SUCCESS,
		password
	}
}

export const updatePasswordError = (error) => {
	return {
		type: types.FETCH_UPDATE_PASSWORD_FAILURE,
		error
	}
}

export const recoverPasswordRequest = (email) => {
	return {
		type: types.FETCH_RECOVER_PASSWORD_REQUEST,
		email
	}
}

export const recoverPasswordSuccess = (email) => {
	return {
		type: types.FETCH_RECOVER_PASSWORD_SUCCESS,
		email
	}
}

export const recoverPasswordError = (error) => {
	return {
		type: types.FETCH_RECOVER_PASSWORD_FAILURE,
		error
	}
}

export const clearMessages = () => {
	return {
		type: types.FETCH_CLEAR_MESSAGES
	}
}

export const clearMessagesSuccess = () => {
	return {
		type: types.FETCH_CLEAR_MESSAGES_SUCCESS
	}
}
