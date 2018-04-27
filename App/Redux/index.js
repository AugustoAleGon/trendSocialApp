import { combineReducers } from 'redux'
import configureStore from './CreateStore'
import rootSaga from '../Sagas/'
import { reducer as formReducer } from 'redux-form'
import { resettableReducer } from 'reduxsauce'
import {reducer as nav} from './NavigationRedux'
import {reducer as social} from './Reducers/social'
import {reducer as settings} from './Reducers/settings'
import { persistReducer } from 'redux-persist'
import AsyncStorage from 'redux-persist/lib/storage'

export default () => {
  const rootConfig = {
    key: 'root',
    storage: AsyncStorage
    // blacklist: [], reducer keys that you do NOT want stored to persistence here
    // whitelist: [], Optionally, just specify the keys you DO want stored to
    // persistence. An empty array means 'don't store any reducers' -> infinitered/ignite#409
  }
  const socialConfig = {
    key: 'social',
    storage: AsyncStorage
  }
  const settingsConfig = {
    key: 'settings',
    storage: AsyncStorage
  }
  const resettable = resettableReducer('LOG_OUT')
  /* ------------- Assemble The Reducers ------------- */
  const rootReducer = persistReducer(
    rootConfig,
    combineReducers({
      nav: nav,
      // All my reducers are here:
      form: formReducer,
      social: persistReducer(socialConfig, resettable(social)),
      settings: persistReducer(settingsConfig, resettable(settings))
    })
  )

  const store = configureStore(rootReducer, rootSaga)

  return store
}
