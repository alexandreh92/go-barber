import { createReducer } from 'reduxsauce';
import Immutable from 'seamless-immutable';

import { Types, Creators } from './actionCreators';
import { UserState, UpdateProfileSuccessPayload } from './types';
import { AuthTypes } from '../auth';
import { SignInSuccessPayload } from '../auth/types';

export const UserTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE: UserState = Immutable({
  profile: {} as User,
});

/* Reducers */

export const success: Reducer<UserState, SignInSuccessPayload> = (
  state,
  { user }
) => ({
  ...state,
  profile: user,
  loading: false,
});

export const logout: Reducer<UserState> = () => INITIAL_STATE;

export const updateSuccess: Reducer<UserState, UpdateProfileSuccessPayload> = (
  state,
  { profile }
) => ({
  ...state,
  profile,
});

/* Reducers to types */

export const reducer = createReducer<UserState>(INITIAL_STATE, {
  [AuthTypes.SIGN_IN_SUCCESS]: success,
  [AuthTypes.SIGN_UP_SUCCESS]: success,
  [AuthTypes.SIGN_OUT_REQUEST]: logout,
  [UserTypes.UPDATE_PROFILE_SUCCESS]: updateSuccess,
});
