import React, { useCallback } from 'react';

import { useAuth } from '../hooks/auth';
import { useDashboard } from '../hooks/dashboard';

import App from './app.routs';
import AdminApp from './admin.routs';
import Auth from './auth.routs';

const Routes: React.FC = () => {
  const { isAuthenticated } = useAuth();
  const { dashboard } = useDashboard();

  const Dashboard = useCallback(() => {
    const dashboardComponents = {
      admin: <AdminApp />,
      student: <App />,
    };

    return dashboardComponents[dashboard];
  }, [dashboard]);

  return !isAuthenticated ? <Dashboard /> : <Auth />;
};

export default Routes;