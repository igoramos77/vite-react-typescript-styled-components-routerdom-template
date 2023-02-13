import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/auth/SignIn';
import RedefinirSenha from '../pages/auth/RedefinirSenha';


const AuthRoutes: React.FC = () => (
  <Switch>
    <Route path="/resetar-senha" exact component={RedefinirSenha} />
    <Route path="/" component={SignIn} />
  </Switch>
);

export default AuthRoutes;