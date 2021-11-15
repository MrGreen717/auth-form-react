import * as types from './../constants/constants'

export const loginRequest = (user) => {
	return {
		type: types.FETCH_MESSAGES_REQUEST,
		user
	}
}

export const loginSuccess = (result, userAuth) => {
	return {
		type: types.FETCH_MESSAGES_SUCCESS,
		token: userAuth.accessToken,
		user: userAuth
	}
}

export const loginError = (error) => {
	return {
		type: types.FETCH_MESSAGES_FAILURE,
		error
	}
}

export const googleAuthRequest = () => {
	return {
		type: types.FETCH_GOOGLE_AUTH_REQUEST
	}
}

export const googleAuthSuccess = (result, userAuth) => {
	return {
		type: types.FETCH_GOOGLE_AUTH_SUCCESS,
		token: userAuth.accessToken,
		user: userAuth
	}
}

export const signUpRequest = (user) => {
	return {
		type: types.FETCH_SIGNUP_REQUEST,
		user
	}
}

export const signUpSuccess = (userAuth) => {
	return {
		type: types.FETCH_SIGNUP_SUCCESS,
		token: userAuth.accessToken,
		user: userAuth
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

export const logOutRequest = () => {
	return {
		type: types.FETCH_LOGOUT_REQUEST
	}
}

export const logOutSuccess = () => {
	return {
		type: types.FETCH_LOGOUT_SUCCESS
	}
}
