import React, { useState } from 'react';

import { Router } from 'routes';
import { routeConfig } from 'route-components';
import 'index.scss';
import { ErrorBoundary } from 'common/error-boundary';
import { UserContext } from './common/user-context';

const App = () => {
  const [filteredUsers, setFilteredUsers] = useState<DummyUser[]>([]);
  const [unfilteredUsers, setUnfilteredUsers] = useState<DummyUser[]>([]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    unfilteredUsers,
    filteredUsers,
    updateUnfilteredUsers: setUnfilteredUsers,
    updateFilteredUsers: setFilteredUsers,
  };

  return (
    <ErrorBoundary>
      <UserContext.Provider value={value}>
        <Router routeConfig={routeConfig} />
      </UserContext.Provider>
    </ErrorBoundary>
  );
};

export { App };
