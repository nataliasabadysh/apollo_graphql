
import React from 'react';
// Components
import { useCustomerLogin } from '../hooks/useCustomerLogin';

export const Login = () => {
  const { handleChange, save, loginAccount, error, loading } = useCustomerLogin();

  const customerJSX = loginAccount && (
    <p>
      Welcome { loginAccount.customer && loginAccount.customer.username } !
    </p>
  );
  // set to LS loginAccount.token
  
  if (loading) {
    return <p>Loading...</p>
  }

  if (error) {
    return (
      <p>
        We have a problem: {error.message}
      </p>
    )
  }

  return (
    <>
      <input type="text" placeholder="username" name="username" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={save}>Save</button>
      { customerJSX }
    </>
  )
};
