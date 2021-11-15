import { createStore, applyMiddleware, compose } from 'redux'
import { rootSaga } from '../sagas'
import { createBrowserHistory } from 'history'
import { persistStore, persistReducer } from 'redux-persist'
import createSagaMiddleware from 'redux-saga'
import storage from 'redux-persist/lib/storage'
import loginReducer from '../reducers/userReducer'

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['token', 'user']
}

const persistedReducer = persistReducer(persistConfig, loginReducer)

const saga = createSagaMiddleware()

const reduxDevTools =
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()

const composedEnhancer = compose(applyMiddleware(saga), reduxDevTools)

const store = createStore(persistedReducer, undefined, composedEnhancer)

saga.run(rootSaga)

export const history = createBrowserHistory()
export const persistor = persistStore(store)
export default store
