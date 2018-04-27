import { createReducer, createActions } from 'reduxsauce'
import Immutable from 'seamless-immutable'

/* ------------- Types and Action Creators ------------- */

const { Types, Creators } = createActions({
  getSocialPost: null,
  getLimitPost: null,
  fetchedSocialPost: ['response'],
  fetchedLimitPost: ['response'],
  requestFailed: ['error'],
  postReset: null
})

export const socialTypes = Types
export default Creators

/* ------------- Initial State ------------- */

export const INITIAL_STATE = Immutable({
  fetching: false,
  error: null,
  postList: [],
  postReset: null
})

/* ------------- Reducers ------------- */
const fetchedSocialPost = (state, action) => ({
  ...state,
  postList: action.response
})

const failedRequest = (state, action) => ({
  ...state,
  fetching: false,
  error: action.error
})

const fetchedLimitPost = (state, action) => ({
  ...state,
  postList: action.response
})

const resetPost = () => ({
  ...INITIAL_STATE
})

/* ------------- Hookup Reducers To Types ------------- */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.REQUEST_FAILED]: failedRequest,
  [Types.FETCHED_SOCIAL_POST]: fetchedSocialPost,
  [Types.FETCHED_LIMIT_POST]: fetchedLimitPost,
  [Types.POST_RESET]: resetPost
})
