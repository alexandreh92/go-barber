import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import AuthLayout from '~/layouts/auth';

const GuestRoute = () => {
  const { signedIn } = useSelector((state) => state.auth);

  if (signedIn) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <AuthLayout>
      <Outlet />
    </AuthLayout>
  );
};

export default GuestRoute;
