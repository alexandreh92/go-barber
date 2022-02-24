import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import AuthActions from '~/store/ducks/auth';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid e-mail').required('E-mail is required'),
  password: Yup.string().required('Password is required'),
});

const SignIn = () => {
  const dispatch = useDispatch();
  const { signInRequest } = AuthActions;
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit: SubmitHandler = ({ email, password }) => {
    dispatch(signInRequest(email, password));
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />

        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Sign in'}
        </button>

        <Link to="/register">Create a free account</Link>
      </Form>
    </>
  );
};

export default SignIn;
