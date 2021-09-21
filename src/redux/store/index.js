import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import loginReducer from '../reducers/userReducer'
import { rootSaga } from '../sagas'
import { loginSuccess } from '../actions/userActions'

const saga = createSagaMiddleware()

const store = createStore(loginReducer, applyMiddleware(saga))

store.dispatch(loginSuccess())

saga.run(rootSaga)

export default store
