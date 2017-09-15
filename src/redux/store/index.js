import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootReducers from '../reducers'
import rootSaga from '../sagas'

const createStore = (initialState) => {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const sagaMiddleware = createSagaMiddleware();

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  let composeEnhancers = compose;

  if (process.env.NODE_ENV === 'development') {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    rootReducers,
    initialState,
    composeEnhancers(
      applyMiddleware(sagaMiddleware),
      ...enhancers
    )
  );
  sagaMiddleware.run(rootSaga);


  return store;
};

export default createStore(window.__INITIAL_STATE__);