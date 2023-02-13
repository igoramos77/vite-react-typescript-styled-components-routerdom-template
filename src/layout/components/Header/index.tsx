import React, { useCallback } from 'react';

import Toogle from '../../../components/Toggle';
import { useTheme } from '../../../hooks/theme';

import { HeaderContainer } from './styles';

const Header: React.FC = () => {

  const { toggleTheme, theme } = useTheme();

  return (
    <HeaderContainer>
      <main>
        <h1>Header</h1>
        <Toogle onChange={toggleTheme} checked={theme === 'light'} />
      </main>
    </HeaderContainer>
  );
}

export default Header;