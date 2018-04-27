import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  putUrl: ['text'],
  changePost: ['number'],
  changeInterval: ['number']
})

export const settingsTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  url: 'http://api.massrelevance.com/',
  numberOfPost: 20,
  reloadInterval: null
})

/* ------------- Reducers ------------- */
const putUrl = (state, action) => ({
  ...state,
  url: action.text
})

const changePost = (state, action) => ({
  ...state,
  numberOfPost: action.number
})

const changeInterval = (state, action) => ({
  ...state,
  reloadInterval: action.number
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PUT_URL]: putUrl,
  [Types.CHANGE_POST]: changePost,
  [Types.CHANGE_INTERVAL]: changeInterval
})
