
import React from 'react';
// Components
import { List } from './view/list';
import { Login } from './view/logIn';

export const Customer = () => {
  return (
    <>
      <h1>Registration</h1>
      <Login/>
      <h1> List </h1>
      <List/>
    </>
  )
};
