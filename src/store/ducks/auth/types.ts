import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

export interface SignInRequestPayload extends AnyAction {
  token: string;
}

export interface SignInSuccessPayload extends AnyAction {
  token: string;
  user: User;
}

/* Action Types */

export interface AuthActionTypes extends DefaultActionTypes {
  SIGN_IN_REQUEST: 'signInRequest';
  SIGN_IN_SUCCESS: 'signInSuccess';
  SIGN_OUT_REQUEST: 'signOutRequest';
  SIGN_UP_REQUEST: 'signUpRequest';
  SIGN_UP_SUCCESS: 'signUpSuccess';
  SET_LOADING: 'setLoading';
}

export interface AuthActionCreatorTypes extends DefaultActionCreators {
  signInRequest: (email: string, password: string) => SignInRequestPayload;
  signInSuccess: (token: string, user: User) => SignInSuccessPayload;
  signOutRequest: () => AnyAction;
  signUpRequest: () => AnyAction;
  signUpSuccess: () => AnyAction;
  setLoading: () => AnyAction;
}

export interface AuthState {
  signedIn: boolean;
  token?: string;
  loading: boolean;
}
