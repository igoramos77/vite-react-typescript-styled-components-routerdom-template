import Routes from './routes';

import { AuthProvider } from './hooks/auth';

import GlobalStyles from './theme/globalStyles';
import { DashboardProvider } from './hooks/dashboard';

function App() {

  return (
    <AuthProvider>
      <DashboardProvider>
        <GlobalStyles />
        <Routes />
      </DashboardProvider>
    </AuthProvider>
  )
}

export default App
