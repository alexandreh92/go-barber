import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import { Wrapper } from './styles';

const DefaultLayout = ({ children }) => (
  <Wrapper>
    <Header />
    {children}
  </Wrapper>
);

export default DefaultLayout;

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
