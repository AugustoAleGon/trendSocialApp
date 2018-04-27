/*
    Index of Saga
*/
import { takeLatest } from 'redux-saga/effects'

/* ------------- Types ------------- */
import { socialTypes } from '../Redux/Reducers/social'

/* ------------- Sagas ------------- */

import {
  getSocialPost,
  getLimitPost
} from './socialSaga'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.

export default function * root () {
  yield [
    // some sagas only receive an action
    // social sagas
    takeLatest(socialTypes.GET_SOCIAL_POST, getSocialPost),
    takeLatest(socialTypes.GET_LIMIT_POST, getLimitPost)
  ]
}
