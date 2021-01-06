import { useState } from 'react';

const useDrawerToggle = () => {
  const [selectedKey, setSelectedKey] = useState('0');

  const changeSelectedKey = (event) => {
    const { key } = event;
    setSelectedKey(key);
  };

  return { selectedKey, changeSelectedKey };
};

export default useDrawerToggle;
