import { Reactotron } from 'reactotron-core-client';
import { AnyAction } from 'redux';
import { AuthState } from '~/store/ducks/auth/types';
import { UserState } from '~/store/ducks/user/types';

declare global {
  export interface ReduxState {
    auth: AuthState;
    user: UserState;
  }

  interface Console {
    tron: typeof Reactotron;
  }

  export type Reducer<S, P extends AnyAction = unknown> = (
    state: S,
    props: P
  ) => S;
}
export {};
