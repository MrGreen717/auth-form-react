import {
	FETCH_MESSAGES_FAILURE,
	FETCH_MESSAGES_REQUEST,
	FETCH_MESSAGES_SUCCESS
} from './../constants/constants'

export const loginRequest = (user) => {
	return {
		type: FETCH_MESSAGES_REQUEST,
		user
	}
}

export const loginSuccess = (user) => {
	return {
		type: FETCH_MESSAGES_SUCCESS,
		user
	}
}

export const loginError = (error) => {
	return {
		type: FETCH_MESSAGES_FAILURE,
		error
	}
}
