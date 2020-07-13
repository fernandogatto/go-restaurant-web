import React, { useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import Routes from './routes';

import GlobalStyle from './styles/global';
import light from './styles/themes/light';
import dark from './styles/themes/dark';

import ThemeSwitcher from './components/ThemeSwitcher';

const App: React.FC = () => {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = useCallback(() => {
    setTheme(theme.title === 'light' ? dark : light);
  }, [setTheme, theme.title]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>
          <ThemeSwitcher toggleTheme={toggleTheme} />

          <Routes />
        </Router>
      </ThemeProvider>
    </>
  );
};

export default App;
