import { signInWithEmailAndPassword } from 'firebase/auth'
import { takeLatest, put, call } from '@redux-saga/core/effects'
import { auth } from './../../firebase/firebase'
import { loginError, loginSuccess } from './../actions/userActions'
import { FETCH_MESSAGES_REQUEST } from '../constants/constants'

const loginUser = async (value) => {
	await signInWithEmailAndPassword(auth, value.user.email, value.user.password)
}

function* signInWorker(action) {
	try {
		const result = yield call(loginUser, action)
		yield put(loginSuccess(result))
	} catch (error) {
		const error_message = { code: error.code, message: error.message }

		yield put(loginError(error_message))
	}
}

export default function* watchAuth() {
	yield takeLatest(FETCH_MESSAGES_REQUEST, signInWorker)
}
