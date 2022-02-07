import { AnyAction } from 'redux';

declare global {
  export type Reducer<S, P extends AnyAction = unknown> = (
    state: S,
    props: P
  ) => S;
}
export {};
