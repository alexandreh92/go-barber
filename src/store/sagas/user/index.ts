import { call, put } from 'redux-saga/effects';
import { toastr } from 'react-redux-toastr';

import api from '~/services/api';

import UserActions from '~/store/ducks/user';
import { UpdateProfileRequest } from '~/store/ducks/user/types';
import axios, { AxiosResponse } from 'axios';

export function* updateProfile({ data }: UpdateProfileRequest) {
  try {
    const { name, password, passwordConfirmation, actualPassword, avatar } =
      data;

    const fd = new FormData();

    if (avatar) fd.append('avatar', avatar);
    fd.append('name', name);

    if (actualPassword) {
      fd.append('current_password', actualPassword);
      fd.append('password', password);
      fd.append('password_confirmation', passwordConfirmation);
    }

    const response: AxiosResponse<User> = yield call(api.put, 'profile', fd);

    toastr.success('Sucesso!', 'Perfil atualizado com sucesso.');

    yield put(UserActions.updateProfileSuccess(response.data));
  } catch (error) {
    if (axios.isAxiosError(error))
      toastr.error('Erro', error.response?.data?.errors[0]);
    yield put(UserActions.updateProfileFailure());
  }
}
