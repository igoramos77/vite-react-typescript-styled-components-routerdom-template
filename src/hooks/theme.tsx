import React, { createContext, useState, useContext, PropsWithChildren } from 'react';

import { ThemeProvider as StyledProvider } from 'styled-components';

import lightTheme from '../../src/theme/light';
import darkTheme from '../../src/theme/dark';

type ITheme = 'light' | 'dark';

interface IThemeContext {
  toggleTheme(): void;
  theme: ITheme;
}

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC<PropsWithChildren> = ({ children }) => {
  
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSave = localStorage.getItem('@theme') as ITheme;

    if(themeSave) {
      console.log(themeSave)
      return themeSave;
    }
    else {
      return 'light';
    }
  });

  const toggleTheme = () => {
    if(theme === 'dark') {
      setTheme('light');
      localStorage.setItem('@theme', 'light');
    }
    else {
      setTheme('dark');
      localStorage.setItem('@theme', 'dark');
    }
  };
  
  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }} >
        <StyledProvider theme={theme === 'dark' ? darkTheme : lightTheme}>
          {children}
        </StyledProvider>
    </ThemeContext.Provider>
  )
}

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
