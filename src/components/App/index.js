import React, { useState } from 'react';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import Account from '../../pages/Account';
import Admin from '../../pages/Admin';
import Home from '../../pages/Home';
import Landing from '../../pages/Landing';
import PasswordForget from '../../pages/PasswordForget';
import SignIn from '../../pages/SignIn';
import SignUp from '../../pages/SignUp';
import PrivateRoute from '../Authentication/Private';
import SideBar from '../AntDesign/Navigation/SideBar';
import NavBar from '../AntDesign/Navigation/NavBar';
import TopicMenu from '../AntDesign/Navigation/TopicMenu';

const NoMatch = () => (
  <>
    <div>- 404 -</div>
  </>
);

const App = () => {
  const topics = [
    <Link to={ROUTES.LANDING}>Landing</Link>,
    <Link to={ROUTES.SIGN_IN}>Sign In</Link>,
  ];
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState('0');

  const changeSelectedKey = ({ key }) => {
    setSelectedKey(key);
    setContentIndex(key);
  };

  const Menu = (
    <TopicMenu topics={topics} selectedKey={selectedKey} changeSelectedKey={changeSelectedKey} />
  );
  return (
    <>
      <Router>
        <div>
          <NavBar menu={Menu} />
          <Layout>
            <SideBar menu={Menu} />
            <Layout.Content className='content'>
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
            </Layout.Content>
          </Layout>
        </div>
      </Router>
    </>
  );
};

export default App;
