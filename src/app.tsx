import React, { useState } from 'react';

import { Router } from 'routes';
import { routeConfig } from 'route-components';
import 'index.scss';
import { ErrorBoundary } from 'common/error-boundary';
import { UserContext } from 'user-context';

const App = () => {
  const [filterUsers, setFilterUsers] = useState<DummyUser[]>([]);
  const [defaultUsers, setDefaultUsers] = useState<DummyUser[]>([]);

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const value = {
    defaultUsers,
    filterUsers,
    updateDefaultUsers: setDefaultUsers,
    updateFilterUsers: setFilterUsers,
  };

  return (
    <UserContext.Provider value={value}>
      <ErrorBoundary>
        <Router routeConfig={routeConfig} />
      </ErrorBoundary>
    </UserContext.Provider>
  );
};

export { App };
