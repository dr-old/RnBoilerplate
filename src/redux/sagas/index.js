import {spawn} from 'redux-saga/effects';

// Sagas
import userSaga from './user-saga';

// Export the root saga
export default function* rootSaga() {
  yield spawn(userSaga);
}
