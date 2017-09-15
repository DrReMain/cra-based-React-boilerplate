import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import reducers from './counter'
import fetch from './fetch'

const rootReducer = combineReducers({
  counter: reducers,
  fetch: fetch,
  routing: routerReducer
});

export default rootReducer