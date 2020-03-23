import { useMutation } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';
// Hooks
import { useForm } from '../../hooks/useForm'
// Mutations
const mutationCreateAccount = loader('./gql/mutationCreateAccount.graphql');

export const useCustomer = () => {
  const [addUser, { loading, error, data }] = useMutation(mutationCreateAccount);

  const { handleChange, form }  = useForm({
    name: '',
    username: '',
    password: ''
  });

  const save = () => {
    addUser({ 
      variables: {
        account: form
      }
    })
  };

  return {
    handleChange,
    save,
    createdAccount: data && data.createAccount,
    error, 
    loading 
  }
};
