import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';
import * as Yup from 'yup';

import AuthActions from '~/store/ducks/auth';

import logo from '~/assets/logo.svg';

const schema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid e-mail').required('E-mail is required'),
  password: Yup.string()
    .min(6, 'Minimum 6 characters')
    .required('Password is required'),
  password_confirmation: Yup.string()
    .min(6, 'Minimum 6 characters')
    .required('Password confirmation is required'),
});

const SignUp = () => {
  const dispatch = useDispatch();

  const handleSubmit: SubmitHandler = ({
    name,
    email,
    password,
    password_confirmation,
  }) => {
    dispatch(
      AuthActions.signUpRequest(name, email, password, password_confirmation)
    );
  };

  return (
    <>
      <img src={logo} alt="GoBarber" />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="name" placeholder="Your name" />
        <Input name="email" type="email" placeholder="Your e-mail" />
        <Input name="password" type="password" placeholder="Your password" />
        <Input
          name="password_confirmation"
          type="password"
          placeholder="Password confirmation"
        />

        <button type="submit">Register</button>
        <Link to="/">Sign in</Link>
      </Form>
    </>
  );
};

export default SignUp;
