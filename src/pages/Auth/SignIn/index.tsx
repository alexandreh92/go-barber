import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';
import * as Yup from 'yup';

import logo from '~/assets/logo.svg';

import AuthActions from '~/store/ducks/auth';

const schema = Yup.object().shape({
  email: Yup.string()
    .email('Insira um e-mail válido')
    .required('O e-mail é obrigatório'),
  password: Yup.string().required('A senha é obrigatória'),
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
        <Input name="email" type="email" placeholder="Seu e-mail" />
        <Input
          name="password"
          type="password"
          placeholder="Sua senha secreta"
        />

        <button type="submit" disabled={loading}>
          {loading ? 'Carregando...' : 'Acessar'}
        </button>

        <Link to="/register">Criar conta gratuita</Link>
      </Form>
    </>
  );
};

export default SignIn;