import React, { PropsWithChildren } from 'react';

import { useTheme } from '../hooks/theme';

import Header from './components/Header';
import Aside from './components/Aside';
import Content from './components/Content';

import { Grid } from './layout-styles';

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  const { theme } = useTheme();

  return(
    <Grid id="grid">
      <Header />
      <Content>
        {children}
      </Content>
    </Grid>
  );
}

export default Layout;