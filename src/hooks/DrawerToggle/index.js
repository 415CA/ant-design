import { useState } from 'react';

const useDrawerToggle = () => {
  const [contentIndex, setContentIndex] = useState(0);
  const [selectedKey, setSelectedKey] = useState('0');

  const changeSelectedKey = ({ key }) => {
    setSelectedKey(key);
    setContentIndex(key);
  };

  return { selectedKey, changeSelectedKey };
};

export default useDrawerToggle;
