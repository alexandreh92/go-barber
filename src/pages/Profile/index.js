import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import UserActions from '~/store/ducks/user';
import AuthActions from '~/store/ducks/auth';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const { updateProfileRequest } = UserActions;
  const { signOut } = AuthActions;

  const handleSubmit = (data) => {
    dispatch(updateProfileRequest(data));
  };

  const handleLogout = () => {
    dispatch(signOut());
  };

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit}>
        <AvatarInput name="avatar_id" />

        <Input name="name" placeholder="Nome Completo" />
        <Input name="email" disabled placeholder="Seu endereço de email" />
        <hr />
        <Input
          type="password"
          name="actualPassword"
          placeholder="Sua senha atual"
        />
        <Input type="password" name="password" placeholder="Sua nova senha" />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Confirmação de senha"
        />

        <button type="submit">Atualizar Perfil</button>
      </Form>
      <button type="button" onClick={handleLogout}>
        Sair do Go Barber
      </button>
    </Container>
  );
};

export default Profile;
