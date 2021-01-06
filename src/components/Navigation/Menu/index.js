import { Menu } from 'antd';
import React from 'react';
import useDrawerToggle from '../../../hooks/DrawerToggle';

const SideBarMenu = ({ links }) => {
  const { selectedKey, changeSelectedKey } = useDrawerToggle;

  const styledLinks = links.map((link, index) => (
    <Menu.Item key={index} onClick={changeSelectedKey}>
      {link}
    </Menu.Item>
  ));

  return (
    <Menu mode='inline' selectedKeys={[selectedKey]}>
      {styledLinks}
    </Menu>
  );
};
export default SideBarMenu;
