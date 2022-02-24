import { createActions } from 'reduxsauce';

import { AuthActionTypes, AuthActionCreatorTypes } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<
  AuthActionTypes,
  AuthActionCreatorTypes
>(
  {
    signInRequest: ['email', 'password'],
    signInSuccess: ['token', 'user'],
    signOutRequest: null,
    signUpRequest: ['name', 'email', 'password', 'password_confirmation'],
    signUpSuccess: ['token', 'user'],
    setLoading: null,
  },
  { prefix: '@auth/' }
);

export { Types, Creators };
