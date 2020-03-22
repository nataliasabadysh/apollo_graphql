// Core
import React from 'react';
import Moment from 'react-moment';
// Hooks
import { useQueryAllCustomers } from '../hooks/useQueryAllCustomers';

export const List = () => {
  const { loading, error, data }  = useQueryAllCustomers();

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

  const petsJSX = data && data.allCustomers.map(({username, name, dateCreated}) => (
    <p key={name}>
      <span>Name: {name}</span>
      <span>: {username}</span>
      <span>Date:  <Moment parse="YYYY-MM-DD"> {dateCreated} </Moment></span>
    </p>
  ));

  return (
    <>
      <h1>Customer List</h1>
       {petsJSX}
    </>
  )
};
