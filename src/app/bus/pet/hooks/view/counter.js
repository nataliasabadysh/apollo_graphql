// Core
import React from 'react';

// Hooks
import { useQueryAvailablePets } from '../useQueryAvailablePets';

export const Counter = () => {
  const { loading, error, data, refetch, networkStatus } = useQueryAvailablePets();
  
  if (loading) {
    return <p>Loading...</p>
  }
  if (networkStatus ===4 ) {
    return <p>Refething ...</p>
  }

  if (error) {
    return (
      <p>
        We have a problem: {error.message}
      </p>
    )
  }

  return (
    <p>
      AvailablePets:
      {data.availablePets}
    </p>
  )
};
