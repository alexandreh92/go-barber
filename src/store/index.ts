import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';

import apiMiddleware from '~/services/apiMiddleware';

import createStore from './createStore';
import persistReducers from './persistReducers';

import rootReducer from './ducks';
import rootSaga from './sagas';

const sagaMonitor =
  process.env.NODE_ENV === 'development'
    ? console.tron.createSagaMonitor()
    : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

const middlewares = [sagaMiddleware, apiMiddleware];

const store = createStore(persistReducers(rootReducer), middlewares);
const persistor = persistStore(store);

sagaMiddleware.run(rootSaga);

export { persistor, store };

export type Middlewares = typeof middlewares;
