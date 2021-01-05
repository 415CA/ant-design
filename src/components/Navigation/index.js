import { Layout } from 'antd';
import React, { useContext } from 'react';
import useDrawerToggle from '../../hooks/DrawerToggle';
import NavBar from './NavBar';
import { SideBarContainer, SideBarItems } from './SideBar';
import TopicMenu from './Menu';
import { AuthContext } from '../Authentication/Firebase/Context';

const Navigation = ({ children }) => {
  const { currentUser } = useContext(AuthContext);
  const { selectedKey, changeSelectedKey } = useDrawerToggle;
  const { authorized, nonAuthorized } = SideBarItems;
  const { Content } = Layout;

  const Menu = (
    <TopicMenu
      topics={currentUser ? authorized : nonAuthorized}
      selectedKey={selectedKey}
      changeSelectedKey={changeSelectedKey}
    />
  );
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
