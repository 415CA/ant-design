import { Layout } from 'antd';
import React, { useContext } from 'react';
import useDrawerToggle from '../../hooks/DrawerToggle';
import NavBar from '../AntDesign/Navigation/NavBar';
import SideBar from '../AntDesign/Navigation/SideBar';
import TopicMenu from '../AntDesign/Navigation/TopicMenu';
import { AuthContext } from '../Authentication/Firebase/Context';
import SideBarItems from './sbitems';

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
        <SideBar menu={Menu} />
        <Content>{children}</Content>
      </Layout>
    </>
  );
};

export default Navigation;
