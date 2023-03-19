import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import storage from 'redux-persist/lib/storage';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import rootReducers from './rootReducers';
import rootSagas from './rootSagas';

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

const bindMiddlewares = (middleware) => {
	if (process.env.NODE_ENV !== 'production')
		return composeWithDevTools(applyMiddleware(middleware));
	return applyMiddleware(middleware);
};

function* configureSaga() {
	yield all([...rootSagas]);
}

const configureStore = () => {
	let store = createStore(persistedReducer, bindMiddlewares(sagaMiddleware));

	sagaMiddleware.run(configureSaga);
	let persistor = persistStore(store);

	return { store, persistor };
};

const storeContainer = configureStore();
export default storeContainer;
