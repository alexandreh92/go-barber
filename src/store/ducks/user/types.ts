import { DefaultActionTypes, DefaultActionCreators } from 'reduxsauce';
import { AnyAction } from 'redux';

export interface UpdateProfileRequest extends AnyAction {
  name: string;
  email: string;
  actualPassword?: string;
  password?: string;
  passwordConfirmation?: string;
  avatar_id: string;
}

export interface UpdateProfileSuccessPayload extends AnyAction {
  profile: User;
}

/* Action Types */

export interface UserActionTypes extends DefaultActionTypes {
  UPDATE_PROFILE_REQUEST: 'updateProfileRequest';
  UPDATE_PROFILE_SUCCESS: 'updateProfileSuccess';
  UPDATE_PROFILE_FAILURE: 'updateProfileFailure';
}

export interface UserActionCreatorTypes extends DefaultActionCreators {
  updateProfileRequest: (data: UpdateProfileRequest) => AnyAction;
  updateProfileSuccess: (profile: User) => UpdateProfileSuccessPayload;
  updateProfileFailure: () => AnyAction;
}

export interface UserState {
  profile: User;
}
