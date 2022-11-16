import React from 'react';

interface UserContextInterface {
  unfilteredUsers: DummyUser[]
  filteredUsers: DummyUser[]
  updateUnfilteredUsers: React.Dispatch<React.SetStateAction<DummyUser[]>>
  updateFilteredUsers: React.Dispatch<React.SetStateAction<DummyUser[]>>
}

const value = {
  unfilteredUsers: [] as DummyUser[],
  filteredUsers: [] as DummyUser[],
  updateUnfilteredUsers: () => null,
  updateFilteredUsers: () => null,
};

export const UserContext = React.createContext<UserContextInterface>(value);
