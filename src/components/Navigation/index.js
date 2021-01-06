import { Layout } from 'antd';
import React, { useContext } from 'react';
import { AuthContext } from '../Authentication/Firebase/Context';
import SideBarMenu from './Menu';
import NavBar from './NavBar';
import { SideBarContainer, SideBarItems } from './SideBar';

const Navigation = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const { authorized, nonAuthorized } = SideBarItems;
  const { Content } = Layout;

  const Menu = <SideBarMenu links={currentUser ? authorized : nonAuthorized} />;

  return (
    <>
      <NavBar menu={Menu} />
      <Layout>
        <SideBarContainer menu={Menu} />
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default Navigation;
