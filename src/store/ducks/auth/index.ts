import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { Types, Creators } from './actionCreators';
import { AuthState, SignInSuccessPayload } from './types';

export const AuthTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE: AuthState = Immutable({
  signedIn: false,
  token: undefined,
  loading: false,
});

/* Reducers */

export const success: Reducer<AuthState, SignInSuccessPayload> = (
  state,
  { token }
) => ({
  ...state,
  signedIn: true,
  token,
  loading: false,
});

export const logout: Reducer<AuthState> = (state) => ({
  ...state,
  signedIn: false,
  token: undefined,
});

export const loading: Reducer<AuthState> = (state) => ({
  ...state,
  loading: !state.loading,
});

/* Reducers to types */

export const reducer = createReducer<AuthState>(INITIAL_STATE, {
  [Types.SIGN_IN_SUCCESS]: success,
  [Types.SIGN_OUT_REQUEST]: logout,
  [Types.SIGN_UP_SUCCESS]: success,
  [Types.SET_LOADING]: loading,
});
