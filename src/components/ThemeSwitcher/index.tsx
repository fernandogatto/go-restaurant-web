import React, { useContext } from 'react';
import Switch from 'react-switch';
import { ThemeContext } from 'styled-components';
import { shade } from 'polished';

import { Container } from './styles';

interface IThemeProps {
  toggleTheme(): void;
}

const ThemeSwitcher: React.FC<IThemeProps> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <Container>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={26}
        width={60}
        handleDiameter={30}
        offColor={shade(0.15, colors.primary)}
        onColor={shade(0.15, colors.primary)}
      />
    </Container>
  );
};

export default ThemeSwitcher;
