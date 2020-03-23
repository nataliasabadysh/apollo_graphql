import { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Mutations
const mutationLoginAccount = loader('./gql/mutationLoginAccount.graphql');

export const useCustomerLogin = () => {
  const [loginUser, { loading, error, data  }] = useMutation(mutationLoginAccount);

  const [value, setValues] = useState({
    username:'',
    password:'',
  });
  
  const handleChange = (event) => {
    event.persist();
    setValues((prevValues) => ({
        ...prevValues,
        [event.target.name]: event.target.value,
    }));
  };


  const save = () => {
  const { username, password }  = value;
    loginUser({ // method use mutation 
      variables: {
        username,
        password
      }
    })
  };


  return {
    handleChange,
    save,
    loginAccount: data && data.logIn,
    error, 
    loading 
  }
};
