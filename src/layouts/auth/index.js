import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper, Content } from './styles';

const AuthLayout = ({ children }) => (
  <Wrapper>
    <Content>{children}</Content>
  </Wrapper>
);

export default AuthLayout;

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
};
