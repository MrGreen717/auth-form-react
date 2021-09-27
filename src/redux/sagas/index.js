import { all } from '@redux-saga/core/effects'
import loginSaga from './loginSaga'

export function* rootSaga() {
	yield all([loginSaga()])
}
