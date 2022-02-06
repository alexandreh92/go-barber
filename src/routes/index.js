import { Routes as Switch, Route } from 'react-router-dom';

import SignIn from '~/pages/Auth/SignIn';
import SignUp from '~/pages/Auth/SignUp';
import Dashboard from '~/pages/Dashboard';
import Profile from '~/pages/Profile';

import AuthRoute from './AuthRoute';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
  <Switch>
    <Route element={<AuthRoute />}>
      <Route path="/" exact element={<SignIn />} />
      <Route path="/register" element={<SignUp />} />
    </Route>
    <Route element={<PrivateRoute />}>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/profile" element={<Profile />} />
    </Route>
  </Switch>
);

export default Routes;
