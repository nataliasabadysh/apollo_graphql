// Core
import { useQuery } from '@apollo/react-hooks';
import { loader } from 'graphql.macro';

// Queries
const queryQueryAllCustomers = loader('./gql/queryQueryAllCustomers.qraphql');

export const useQueryAllCustomers = () => {
  return useQuery(queryQueryAllCustomers);
  //  return { allCustomers: data && data.allCustomers }
};
