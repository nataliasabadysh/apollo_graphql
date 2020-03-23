// Core
import React from 'react';

// Components
import { Counter } from './hooks/view/counter';
import { List } from './hooks/view/list';
import { SpecialList } from './hooks/view/specialList';
import { Profile } from './hooks/view/profile';
import { CheckinPet } from './hooks/view/checkinPet';

export const Pet = () => {
  return (
    <>
    <Counter />
    <List />
    <SpecialList />
    <Profile />
    <CheckinPet />
    </>
  )
};
