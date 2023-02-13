import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
  PropsWithChildren
} from 'react';
import { useHistory } from 'react-router-dom';
import { AxiosError } from 'axios';

import api from '../services/api';

import { IUserProps } from '../interfaces/User';
import { IRoleProps } from '../interfaces/Role';

interface IFailedRequest {
  onSuccess(token: string): void;
  onFailure(err: AxiosError): void;
}

interface AuthState {
  token: string;
  refreshToken: string;
}

interface LoginCredentials {
  email: string;
  password: string;
}

interface IWithAuthorizationProps extends PropsWithChildren {
  roles: IRoleProps[];
}

interface AuthContextState {
  user: IUserProps;
  isAuthenticated: boolean;
  WithAuthorization: React.FC<IWithAuthorizationProps>;
  updateUser(userData: React.SetStateAction<IUserProps>): void;
  login(credentials: LoginCredentials): Promise<void>;
  logout(): void;
}

const AuthContext = createContext<AuthContextState>({} as AuthContextState);

const AuthProvider: React.FC<PropsWithChildren> = ({ children }) => {
  const history = useHistory();

  const [user, setUser] = useState<IUserProps>({} as IUserProps);
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem('token'),
  );

  const clearStorage = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('refreshToken');

    setUser({} as IUserProps);
    setIsAuthenticated(false);
  };

  const logout = useCallback(() => {
    clearStorage();

    history.push('/');
  }, [history]);

  useEffect(() => {
    (async () => {
      const token = localStorage.getItem('token');

      if (token) {
        try {
          const userData = await api.get(`/sessions/me`);

          setUser({
            ...userData.data.user,
          });

          setIsAuthenticated(true);
        } catch (error) {
          logout();
        }
      }
    })();
  }, [logout]);

  const login = useCallback(async ({ email, password }: LoginCredentials) => {
    const response = await api.post<AuthState>('/sessions', {
      email,
      password,
    });

    const { token, refreshToken } = response.data;

    localStorage.setItem('token', token);
    localStorage.setItem('refreshToken', refreshToken);

    api.defaults.headers.Authorization = `Bearer ${token}`;

    const profileResponse = await api.get('/sessions/me');

    setUser({
      ...profileResponse.data.user,
    });

    setIsAuthenticated(true);
  }, []);

  const updateUser = useCallback(
    (userData: React.SetStateAction<IUserProps>) => {
      setUser(userData);
    },
    [],
  );

  let refreshToken = localStorage.getItem('refreshToken');
  let isRefreshing = false;
  let failedRequestsQueue: IFailedRequest[] = [];

  api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        if (error.response.data?.error === 'token-expired') {
          refreshToken = localStorage.getItem('refreshToken');
          const originalConfig = error.config;

          if (!isRefreshing) {
            isRefreshing = true;

            api
              .post('/refresh-tokens', { token: refreshToken })
              .then(response => {
                localStorage.setItem('token', response.data.token);
                localStorage.setItem(
                  'refreshToken',
                  response.data.refreshToken,
                );

                api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

                failedRequestsQueue.forEach(request =>
                  request.onSuccess(response.data.token),
                );
                failedRequestsQueue = [];
              })
              .catch(err => {
                failedRequestsQueue.forEach(request => request.onFailure(err));
                failedRequestsQueue = [];
              })
              .finally(() => {
                isRefreshing = false;
              });
          }

          return new Promise((resolve, reject) => {
            failedRequestsQueue.push({
              onSuccess: (newToken: string) => {
                originalConfig.headers.Authorization = `Bearer ${newToken}`;

                resolve(api(originalConfig));
              },
              onFailure: (err: AxiosError) => {
                reject(err);
              },
            });
          });
        }

        logout();
      }

      return Promise.reject(error);
    },
  );

  const WithAuthorization: React.FC<IWithAuthorizationProps> = ({
    children,
    roles,
  }) => <>{roles.includes(user.role) && children}</>;

  return (
    <AuthContext.Provider
      value={{
        user,
        updateUser,
        login,
        logout,
        isAuthenticated,
        WithAuthorization,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth(): AuthContextState {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be user within an AuthProvider');
  }

  return context;
}

export { AuthProvider, useAuth };