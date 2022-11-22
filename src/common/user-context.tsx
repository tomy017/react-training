import React from 'react';

interface UserContextInterface {
  currentUser: LoginResponse
  unfilteredUsers: DummyUser[]
  filteredUsers: DummyUser[]
  updateUnfilteredUsers: React.Dispatch<React.SetStateAction<DummyUser[]>>
  updateFilteredUsers: React.Dispatch<React.SetStateAction<DummyUser[]>>
  updateCurrentUser: React.Dispatch<React.SetStateAction<LoginResponse>>
}

const value = {
  currentUser: {} as LoginResponse,
  unfilteredUsers: [] as DummyUser[],
  filteredUsers: [] as DummyUser[],
  updateUnfilteredUsers: () => null,
  updateFilteredUsers: () => null,
  updateCurrentUser: () => null,
};

export const UserContext = React.createContext<UserContextInterface>(value);
