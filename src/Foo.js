import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import AuthActions from '~/store/ducks/auth';

const { signInRequest } = AuthActions;

// import { Container } from './styles';

export default function Foo() {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.auth);

  return (
    <div>
      <div>{JSON.stringify(token)}</div>
      <button
        onClick={() => {
          signInRequest('');
        }}
      />
    </div>
  );
}
