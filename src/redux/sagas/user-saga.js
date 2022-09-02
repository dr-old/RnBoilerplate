import {put, call, takeLatest} from 'redux-saga/effects';

function* fetchLogin({payload}) {
  // const response = yield call(getLogin, payload);
  // if (response.code >= 200 && response.code <= 308) {
  //   yield put({type: types.GET_LOGIN_SUCCESS, payload: response.data});
  // } else if (response.code === 403) {
  //   showMessage({
  //     message: 'Invalid',
  //     description: response.message,
  //     type: 'danger',
  //   });
  //   yield put({type: types.GET_LOGIN_RESET, payload: {}});
  // } else {
  //   yield put({type: types.GET_LOGIN_FAILURE, payload: response});
  // }
}

export default function* podSaga() {
  // yield takeLatest(types.GET_LOGIN, fetchLogin);
}
