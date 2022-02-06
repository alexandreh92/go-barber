/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import AuthLayout from '~/layouts/auth';
import DefaultLayout from '~/layouts/default';

import { store } from '~/store';

export default function RouteWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  // const signed = store.getState().auth.signedIn;

  // if (!signed && isPrivate) {
  //   return <Redirect to="/" />;
  // }
  // if (signed && !isPrivate) {
  //   return <Redirect to="/dashboard" />;
  // }

  // const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <div />
    // <Route
    //   {...rest}
    //   render={props => (
    //     <Layout>
    //       <Component {...props} />
    //     </Layout>
    //   )}
    // />
  );
}

RouteWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouteWrapper.defaultProps = {
  isPrivate: false,
};
