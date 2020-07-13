import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secondary: string;
      tertiary: string;

      backgroundPrimary: string;
      backgroundSecondary: string;
      backgroundTertiary: string;

      textColor: string;
      inputColor: string;
    };
  }
}
