import { Layout } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as ROUTES from '../../constants/Routes';
import NavBar from './Navigation/NavBar';
import SideBar from './Navigation/SideBar';
import TopicMenu from './Navigation/TopicMenu';

const AntDesign = () => {
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
    <div className='App'>
      <NavBar menu={Menu} />
      <Layout>
        <SideBar menu={Menu} />
        <Layout.Content className='content'>{topics[contentIndex]}</Layout.Content>
      </Layout>
    </div>
  );
};

export default AntDesign;
