import { MenuOutlined } from '@ant-design/icons';
import { Button, Drawer } from 'antd';
import React, { useState } from 'react';
import StyledNav from './Style';

const NavBar = ({ menu }) => {
  const [visible, setVisible] = useState(false);
  return (
    <StyledNav className='navbar'>
      <Button
        className='menu'
        type='primary'
        icon={<MenuOutlined />}
        onClick={() => setVisible(true)}
      />
      <Drawer
        title='App'
        placement='left'
        onClick={() => setVisible(false)}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {menu}
      </Drawer>
      {/* <a href='/'>
        <img src={logo} className='logo' alt='logo' />
      </a> */}
    </StyledNav>
  );
};

export default NavBar;
