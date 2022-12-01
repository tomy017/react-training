import React from 'react';

interface UserContextInterface {
  currentUser: LoginResponse | null
  unfilteredUsers: DummyUser[]
  filteredUsers: DummyUser[]
  updateUnfilteredUsers: React.Dispatch<React.SetStateAction<DummyUser[]>>
  updateFilteredUsers: React.Dispatch<React.SetStateAction<DummyUser[]>>
  updateCurrentUser: React.Dispatch<React.SetStateAction<LoginResponse | null>>
}

const value = {
  currentUser: null,
  unfilteredUsers: [],
  filteredUsers: [],
  updateUnfilteredUsers: () => null,
  updateFilteredUsers: () => null,
  updateCurrentUser: () => null,
};

export const UserContext = React.createContext<UserContextInterface>(value);
