import { applyMiddleware, createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createSagaMiddleware from 'redux-saga'

import { reducer } from './reducer';
import { saga } from './sagas';

const sagaMiddleware = createSagaMiddleware();
const persistConfig = { key: 'redux', storage };

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = createStore(persistedReducer, applyMiddleware(sagaMiddleware))

persistStore(store);
sagaMiddleware.run(saga);
