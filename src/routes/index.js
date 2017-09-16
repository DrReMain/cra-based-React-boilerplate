import React from 'react'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import store from '../redux/store'

import App from './app/App'
// import NotFoundPage from './404/NotFoundPage'
// import CounterPage from './counter/CounterPage'
// import FetchPage from './fetch/FetchPage'
// import ListPage from './list/ListPage'
// import DetailPage from './detail/DetailPage'

const history = syncHistoryWithStore(browserHistory, store);

// export default (
//   <Router history={history}>
//     <Route path="/" component={App}/>
//     <Route path="/counter" component={CounterPage}/>
//     <Route path="/fetch" component={FetchPage}/>
//     <Route path="/list" component={ListPage}/>
//     <Route path="/list/:id" component={DetailPage}/>
//     <Route path="*" component={NotFoundPage}/>
//   </Router>
// )


/* Dynamic routes */
const routes = {
  path: '/',
  component: App,
  indexRoute: null,
  childRoutes: [
    {
      path: 'counter',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./counter/CounterPage').default)
        }, 'counter')
      }
    },
    {
      path: 'fetch',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./fetch/FetchPage').default)
        }, 'fetch')
      }
    },
    {
      path: 'list',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./list/ListPage').default)
        }, 'list')
      },
      childRoutes: [
        {
          path: ':id',
          getComponent(nextState, cb) {
            require.ensure([], (require) => {
              cb(null, require('./detail/DetailPage').default)
            }, 'detail')
          }
        },
      ]
    },
    {
      path: '*',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          cb(null, require('./404/NotFoundPage').default)
        }, '404')
      }
    },
  ],
};

const AppRouter = () => (
  <Router history={history} children={routes}/>
);

export default AppRouter;
