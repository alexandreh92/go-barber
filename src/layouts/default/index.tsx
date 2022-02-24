import React from 'react';

import Header from '~/components/Header';
import { Wrapper } from './styles';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

const DefaultLayout = ({ children }: DefaultLayoutProps) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

export default DefaultLayout;
