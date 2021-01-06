import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import { Account, Admin, Home, Landing, PasswordForget, SignIn, SignUp } from '../../pages';
import { PrivateRoute } from '../Authentication';
import Navigation from '../Navigation';

const NoMatch = () => (
  <>
    <div>- 404 -</div>
  </>
);

const App = () => (
  <>
    <Router>
      <Navigation>
        <Switch>
          <Route exact path={ROUTES.MAS} component={Landing} />
          <Route exact path={ROUTES.LANDING} component={Landing} />
          <Route exact path={ROUTES.SIGN_UP} component={SignUp} />
          <Route exact path={ROUTES.SIGN_IN} component={SignIn} />
          <Route exact path={ROUTES.PASSWORD_FORGET} component={PasswordForget} />
          <PrivateRoute exact path={ROUTES.HOME} component={Home} />
          <PrivateRoute exact path={ROUTES.ACCOUNT} component={Account} />
          <PrivateRoute exact path={ROUTES.ADMIN} component={Admin} />
          <Route path='*' component={NoMatch} />
        </Switch>
      </Navigation>
    </Router>
  </>
);

export default App;
