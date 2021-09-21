import { all } from '@redux-saga/core/effects'
import watchAuth from './loginSaga'

export function* rootSaga() {
	yield all([watchAuth()])
}
