
import React from 'react';
// Components
import { useCustomer } from '../hooks/useCustomer';

export const Login = () => {
  const { handleChange, save, createdAccount, error, loading } = useCustomer();

  const customerJSX = createdAccount && (
    <p>
      We already created customer with name: { createdAccount.name } 
    </p>
  );
  
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
      <input type="text" placeholder="name" name="name" onChange={handleChange} />
      <input type="text" placeholder="username" name="username" onChange={handleChange} />
      <input type="password" placeholder="password" name="password" onChange={handleChange} />
      <button type="submit" onClick={save}>Save</button>
      { customerJSX }
    </>
  )
};
