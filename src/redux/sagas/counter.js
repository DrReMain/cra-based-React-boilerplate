import { delay } from 'redux-saga'
import { call, put, takeEvery } from 'redux-saga/effects'

export function* incrementAsync(action) {
  alert(action.payload);
  yield call(delay, 1000);
  yield put({ type: 'INCREMENT', payload: action.payload });
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}