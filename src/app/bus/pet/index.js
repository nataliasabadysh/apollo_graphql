// Core
import React from 'react';

// Components
import { Counter } from './hooks/view/counter';
import { List } from './hooks/view/list';
import { SpecialList } from './hooks/view/specialList';

export const Pet = () => {
  return (
    <>
      <Counter />
      <List />
      <SpecialList />
    </>
  )
};
