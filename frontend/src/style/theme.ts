import { createTheme } from '@mui/material';

const customTheme = {
  black: {
    main: '#1A1919',
    dark: '#1A1919',
  },
  red: {
    main: '#FF2727',
    dark: '#FF2727',
  },
  blue: {
    main: '#006AFF',
    dark: '#006AFF',
  },
  white: {
    main: '#fff',
  },
  gray: {
    main: '#656575',
  },
};

export type CustomThemeType = typeof customTheme;

export const getTheme = (mode: 'light' | 'black') => {
  const modeObj = {
    palette: {
      mode,
    },
  };

  return createTheme(customTheme, modeObj);
};
