import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

import DefaultLayout from '~/layouts/default';
import { useSelector } from 'react-redux';

const PrivateRoute = () => {
  const { signedIn } = useSelector((state) => state.auth);

  if (!signedIn) {
    return <Navigate to="/" />;
  }

  return (
    <DefaultLayout>
      <Outlet />
    </DefaultLayout>
  );
};

export default PrivateRoute;
