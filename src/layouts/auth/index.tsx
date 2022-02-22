import React from 'react';

import { Wrapper, Content } from './styles';

interface AuthLayoutProps {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: AuthLayoutProps) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default AuthLayout;
