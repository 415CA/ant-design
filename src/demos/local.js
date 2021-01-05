import React from 'react';
import { useLocalStorage } from '../hooks/Storage';

const Local = () => {
  const [value, setValue] = useLocalStorage('query');

  const onChange = (event) => setValue(event.target.value);

  return (
    <div>
      <h1>Hello React with Local Storage!</h1>

      <input value={value} type='text' onChange={onChange} />

      <p>{value}</p>
    </div>
  );
};

export default Local;