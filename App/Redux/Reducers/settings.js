import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  putUrl: ['text']
})

export const settingsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  url: 'http://api.massrelevance.com/'
})

/* ------------- Reducers ------------- */
const putUrl = (state, action) => ({
  ...state,
  url: action.text
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PUT_URL]: putUrl
})
