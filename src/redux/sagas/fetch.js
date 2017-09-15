import { call, put, takeEvery } from 'redux-saga/effects'
import axios from 'axios'


export function* fetch() {
  const data = yield call(() => axios.get('/topics'));
  yield put({ type: 'FETCH', payload: data.data });
}

export function* fetchAsync() {
  yield takeEvery('FETCH_ASYNC', fetch)
}