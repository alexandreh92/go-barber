import { createActions } from 'reduxsauce';

import { UserActionTypes, UserActionCreatorTypes } from './types';

/* Types & Action Creators */

const { Types, Creators } = createActions<
  UserActionTypes,
  UserActionCreatorTypes
>(
  {
    updateProfileRequest: ['data'],
    updateProfileSuccess: ['profile'],
    updateProfileFailure: null,
  },
  { prefix: '@user/' }
);

export { Types, Creators };
