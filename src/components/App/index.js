import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import Account from '../../pages/Account';
import Admin from '../../pages/Admin';
import Home from '../../pages/Home';
import Landing from '../../pages/Landing';
import PasswordForget from '../../pages/PasswordForget';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import PrivateRoute from '../Authentication/Private';
import Navigation from '../Navigation1/test';

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
