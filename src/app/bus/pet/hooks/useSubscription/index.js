// Core
import { useSubscription } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const subscription = loader('./gql/subscription.graphql');

export const useQueryProfile = () => {
  const  { loading, error, data } = useSubscription(subscription);
  
  return { loading, error, data}
};
