import React from 'react'
import { Router, Route, browserHistory } from 'react-router'
import App from './views/app/App'
import NotFoundPage from './views/404/NotFoundPage'
import CounterPage from './views/counter/CounterPage'
import FetchPage from './views/fetch/FetchPage'

import NavBar from './components/NavBar'

export default () => (
  <div>

    <NavBar/>

    <Router history={browserHistory}>
      <Route path="/" component={App}/>
      <Route path="/counter" component={CounterPage}/>
      <Route path="/fetch" component={FetchPage}/>
      <Route path="*" component={NotFoundPage}/>
    </Router>
  </div>
)