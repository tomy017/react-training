import React from 'react';

interface UserContextInterface {
  defaultUsers: DummyUser[]
  filterUsers: DummyUser[]
  updateDefaultUsers: React.Dispatch<React.SetStateAction<DummyUser[]>>
  updateFilterUsers: React.Dispatch<React.SetStateAction<DummyUser[]>>
}

const value = {
  defaultUsers: [] as DummyUser[],
  filterUsers: [] as DummyUser[],
  updateDefaultUsers: () => null,
  updateFilterUsers: () => null,
};

export const UserContext = React.createContext<UserContextInterface>(value);
