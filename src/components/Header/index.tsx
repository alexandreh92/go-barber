import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import Notifications from '~/components/Notifications';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

const Header = () => {
  const { name, avatar } = useSelector((state) => state.user.profile);

  const parsedName = useMemo(
    () => name.replace(/\s+/g, '-').toLowerCase(),
    [name]
  );

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="logo" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>
        <aside>
          <Notifications />
          <Profile>
            <div>
              <strong>{name}</strong>
              <Link to="/profile">My Profile</Link>
            </div>
            <img
              src={
                avatar.url ||
                `https://avatars.dicebear.com/api/personas/${parsedName}.svg?b=%23c9c9c9`
              }
              alt="profile"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
};

export default Header;
