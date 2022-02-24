import { all, takeLatest } from 'redux-saga/effects';

import { AuthTypes } from '~/store/ducks/auth';
import { UserTypes } from '~/store/ducks/user';
import { signIn, signOut, signUp } from './auth';

import { updateProfile } from './user';

export default function* rootSaga() {
  yield all([
    takeLatest(AuthTypes.SIGN_IN_REQUEST, signIn),
    takeLatest(AuthTypes.SIGN_UP_REQUEST, signUp),
    takeLatest(AuthTypes.SIGN_OUT_REQUEST, signOut),
    takeLatest(UserTypes.UPDATE_PROFILE_REQUEST, updateProfile),
  ]);
}
