import { call, put, select } from 'redux-saga/effects'
import {
  getSocialPost as getSocialPostRequest,
  getLimitPost as getLimitPostRequest
} from '../Services'
import socialActions from '../Redux/Reducers/social'

export function * getSocialPost (action) {
  const { fetchedSocialPost, requestFailed } = socialActions
  const url = yield select(state => state.settings.url)
  const responseList = yield call(getSocialPostRequest(url), {})
  if (responseList.ok) {
    yield put(fetchedSocialPost({postList: responseList.data}))
  } else {
    yield put(requestFailed(responseList.error))
  }
}

export function * getLimitPost (action) {
  const { fetchedLimitPost, requestFailed } = socialActions
  const url = yield select(state => state.settings.url)
  const responseList = yield call(getLimitPostRequest(url), {})
  if (responseList.ok) {
    const { data } = responseList
    yield put(fetchedLimitPost({postList: data}))
  } else {
    yield put(requestFailed(responseList.error))
  }
}
