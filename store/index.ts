import { applyMiddleware, createStore, Store } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './root-reducer';
import rootSaga from './root-saga';

export type AppState = ReturnType<typeof rootReducer>;

const configureStore = (preloadedState: any) => {
  const sagaMiddleware = createSagaMiddleware()
  const store: Store = createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(sagaMiddleware),
  )

  // @ts-ignore
  store.sagaTask = sagaMiddleware.run(rootSaga);

  return store;
}

export default configureStore;
