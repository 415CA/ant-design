import React from 'react';

const SignUpForm = ({ onSubmit }) => (
  <div>
    <form onSubmit={onSubmit}>
      <label htmlFor='email'>
        Email
        <input name='email' type='email' placeholder='Email' />
      </label>
      <label htmlFor='password'>
        Password
        <input name='password' type='password' placeholder='Password' />
      </label>
      <button type='submit'>Sign Up</button>
    </form>
  </div>
);

export default SignUpForm;
