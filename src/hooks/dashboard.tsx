import React, { createContext, useState, useContext, useCallback, PropsWithChildren } from 'react';
import { useHistory } from 'react-router-dom';

type IDashboard = 'admin' | 'student';

interface IDashboardContext {
  toggleDashboard(): void;
  dashboard: IDashboard;
}

const DashboardContext = createContext<IDashboardContext>(
  {} as IDashboardContext,
);

const DashboardProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const history = useHistory();

  const [dashboard, setDashboard] = useState<IDashboard>(() => {
    let defaultDashboard: IDashboard = 'student';

    const dashboardSave = localStorage.getItem('@dashboard') as IDashboard;

    if (dashboardSave) {
      return dashboardSave;
    } else {
      return defaultDashboard;
    }
  });

  const toggleDashboard = useCallback(() => {
    const newDashboard = dashboard === 'admin' ? 'student' : 'admin';

    history.push('/')

    setDashboard(newDashboard);
    localStorage.setItem('@dashboard', newDashboard);
  }, [dashboard, history]);

  return (
    <DashboardContext.Provider value={{ toggleDashboard, dashboard }}>
      {children}
    </DashboardContext.Provider>
  );
};

function useDashboard(): IDashboardContext {
  const context = useContext(DashboardContext);

  return context;
}

export { DashboardProvider, useDashboard };