import { call, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import history from '~/services/history';

import api from '~/services/api';

import AuthActions from '~/store/ducks/auth';
import { SignInRequestPayload } from '~/store/ducks/auth/types';
import { AxiosResponse } from 'axios';

interface SignInRequestResponse {
  user: User;
}

export function* signIn({ email, password }: SignInRequestPayload) {
  yield put(AuthActions.setLoading());
  try {
    const response: AxiosResponse<SignInRequestResponse> = yield call(
      api.post,
      'sessions',
      {
        email,
        password,
      }
    );

    const token = response.headers.authorization;

    const { user } = response.data;

    if (!user.provider) {
      toastr.error(
        'Falha no login',
        'Somente prestadores podem acessar o painel de controle.'
      );
      yield put(AuthActions.setLoading());
      return;
    }

    yield put(AuthActions.signInSuccess(token, user));

    history.push('/');
  } catch (error) {
    toastr.error('Falha no login', 'Verifique seu e-mail/senha!');
    yield put(AuthActions.setLoading());
  }
}

export function signOut() {
  history.push('/');
}
