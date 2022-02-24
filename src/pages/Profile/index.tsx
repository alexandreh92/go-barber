import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input, SubmitHandler } from '@rocketseat/unform';

import UserActions from '~/store/ducks/user';
import AuthActions from '~/store/ducks/auth';
import { UpdateProfileRequest } from '~/store/ducks/user/types';
import AvatarInput from './AvatarInput';

import { Container } from './styles';

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.user.profile);

  const { updateProfileRequest } = UserActions;
  const { signOutRequest } = AuthActions;

  const handleSubmit: SubmitHandler<UpdateProfileRequest> = (data) => {
    dispatch(updateProfileRequest(data));
  };

  const handleLogout = () => {
    dispatch(signOutRequest());
  };

  return (
    <Container>
      <Form initialData={profile} onSubmit={handleSubmit as SubmitHandler}>
        <AvatarInput />

        <Input name="name" placeholder="Your name" />
        <Input name="email" disabled placeholder="Your address" />
        <hr />
        <Input
          type="password"
          name="actualPassword"
          placeholder="Your current password"
        />
        <Input
          type="password"
          name="password"
          placeholder="Your new password"
        />
        <Input
          type="password"
          name="passwordConfirmation"
          placeholder="Password confirmation"
        />

        <button type="submit">Update profile</button>
      </Form>
      <button type="button" onClick={handleLogout}>
        Sign out
      </button>
    </Container>
  );
};

export default Profile;
