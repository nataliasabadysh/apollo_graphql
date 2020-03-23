
import React from 'react';
// Components
import { List } from './view/list';
import { Registration } from './view/registration';
import { Login } from './view/login';

export const Customer = () => {
  return (
    <>
      <h1>Registration</h1>
      <Registration/>

      <h1>Log in</h1>
      <Login/>

      <h1> List </h1>
      <List/>
    </>
  )
};
