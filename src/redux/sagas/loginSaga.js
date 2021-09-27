import {
	confirmPasswordReset,
	createUserWithEmailAndPassword,
	sendPasswordResetEmail,
	signInWithEmailAndPassword
} from 'firebase/auth'
import {
	clearMessagesSuccess,
	loginError,
	loginSuccess,
	recoverPasswordError,
	recoverPasswordSuccess,
	signUpSuccess,
	singUpError,
	updatePasswordError,
	updatePasswordSuccess
} from './../actions/userActions'
import {
	FETCH_CLEAR_MESSAGES,
	FETCH_MESSAGES_REQUEST,
	FETCH_SIGNUP_REQUEST,
	FETCH_UPDATE_PASSWORD_REQUEST,
	FETCH_RECOVER_PASSWORD_REQUEST
} from '../constants/constants'
import { takeLatest, put, call, all } from '@redux-saga/core/effects'
import { auth } from './../../firebase/firebase'
import { history } from '../store'
import * as notify from './../../toastify/notifications'

const loginUser = async (value) => {
	await signInWithEmailAndPassword(auth, value.user.email, value.user.password)
}

const signUpUser = async (value) => {
	await createUserWithEmailAndPassword(
		auth,
		value.user.email,
		value.user.password
	)
}

const changePassword = async (value) => {
	await confirmPasswordReset(auth, value.code, value.password.password)
}

const recoverPassword = async (value) => {
	await sendPasswordResetEmail(auth, value.email.email)
}

const clearMessagesValue = () => {}

function* signInWorker(action) {
	try {
		const result = yield call(loginUser, action)
		yield put(loginSuccess(result))
		history.push('/chat')
	} catch (error) {
		const error_message = { code: error.code, message: error.message }

		yield put(loginError(error_message))
	}
}

function* signUpWorker(action) {
	try {
		const result = yield call(signUpUser, action)
		yield put(signUpSuccess(result))
		history.push('/chat')
	} catch (error) {
		const error_message = { code: error.code, message: error.message }
		yield put(singUpError(error_message))
	}
}

function* updatePasswordWorker(action) {
	try {
		const result = yield call(changePassword, action)
		yield put(updatePasswordSuccess(result))
		notify.successUpdatePassword()
	} catch (error) {
		const error_message = { code: error.code, message: error.message }
		yield put(updatePasswordError(error_message))
	}
}

function* recoverPasswordWorker(action) {
	try {
		const result = yield call(recoverPassword, action)
		yield put(recoverPasswordSuccess(result))
		notify.sendEmail()
	} catch (error) {
		const error_message = { code: error.code, message: error.message }
		yield put(recoverPasswordError(error_message))
	}
}

function* clearWorker(action) {
	const result = yield call(clearMessagesValue, action)
	yield put(clearMessagesSuccess(result))
}

function* watchLogin() {
	yield takeLatest(FETCH_MESSAGES_REQUEST, signInWorker)
}

function* watchAuth() {
	yield takeLatest(FETCH_SIGNUP_REQUEST, signUpWorker)
}

function* watchUpdatePassword() {
	yield takeLatest(FETCH_UPDATE_PASSWORD_REQUEST, updatePasswordWorker)
}

function* watchRecoverPassword() {
	yield takeLatest(FETCH_RECOVER_PASSWORD_REQUEST, recoverPasswordWorker)
}

function* watchClearMessages() {
	yield takeLatest(FETCH_CLEAR_MESSAGES, clearWorker)
}

export default function* loginSaga() {
	yield all([
		watchLogin(),
		watchAuth(),
		watchUpdatePassword(),
		watchRecoverPassword(),
		watchClearMessages()
	])
}
