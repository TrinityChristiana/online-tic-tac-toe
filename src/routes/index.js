import React from 'react';
import { Route } from 'react-router-dom';
import userType from '../utils/userType';
import Friends from '../views/Friends';
import Home from '../views/Home';

const Routes = ({ user }) => (
  <>
    <Route exact path="/" user={user} render={() => <Home user={user} />} />
    <Route
      exact
      path="/friends"
      user={user}
      render={() => <Friends user={user} />}
    />
  </>
);

Routes.propTypes = {
  user: userType.isRequired,
};

export default Routes;
