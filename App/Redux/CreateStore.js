import { createStore, applyMiddleware } from 'redux'
import {composeWithDevTools} from 'remote-redux-devtools'
import Config from '../Config/DebugConfig'
import createSagaMiddleware from 'redux-saga'
import {
  createReactNavigationReduxMiddleware
} from 'react-navigation-redux-helpers'
import ScreenTracking from './ScreenTrackingMiddleware'
// creates the store
export default (rootReducer, rootSaga) => {
  /* ------------- Redux Configuration ------------- */

  const middleware = []
  const enhancers = []
  const composeEnhancers = composeWithDevTools({ realtime: true, port: 8080 })

  /* ------------- Analytics Middleware ------------- */
  middleware.push(ScreenTracking)

  /* ------------- Saga Middleware ------------- */

  const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null
  const sagaMiddleware = createSagaMiddleware({ sagaMonitor })
  middleware.push(sagaMiddleware)

  /* ------------- Assemble Middleware ------------- */

  /* ------------- Redux Navigation Middleware ----- */
  const middlewareNavigation = createReactNavigationReduxMiddleware(
    'root',
    state => state.nav
  )

  enhancers.push(applyMiddleware(...middleware, middlewareNavigation))

  // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
  const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore

  const store = createAppropriateStore(rootReducer, composeEnhancers(...enhancers))

  // kick off root saga
  sagaMiddleware.run(rootSaga)

  return store
}
