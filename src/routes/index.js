import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../redux/store'

import App from './app/App'
import NotFoundPage from './404/NotFoundPage'
import CounterPage from './counter/CounterPage'
import FetchPage from './fetch/FetchPage'
import ListPage from './list/ListPage'


const history = syncHistoryWithStore(browserHistory, store);

export default (
  <Router history={history}>
    <Route path="/" component={App}/>
    <Route path="/counter" component={CounterPage}/>
    <Route path="/fetch" component={FetchPage}/>
    <Route path="/list" component={ListPage}/>
    <Route path="*" component={NotFoundPage}/>
  </Router>
)