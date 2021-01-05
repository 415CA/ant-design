import { Menu } from 'antd';
import React from 'react';

const NavMenu = ({ topics, selectedKey, changeSelectedKey }) => {
  const styledTopics = topics.map((topic, index) => (
    <Menu.Item key={index} onClick={changeSelectedKey}>
      {topic}
    </Menu.Item>
  ));

  return (
    <Menu mode='inline' selectedKeys={[selectedKey]}>
      {styledTopics}
    </Menu>
  );
};
export default NavMenu;
