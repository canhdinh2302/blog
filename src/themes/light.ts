import { createTheme } from '@mui/material'

export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    allVariants: {
      color: '#111111',
      fontWeight: 700,
    },
    body1: {
      color: '#222222',
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      light: '#ff9d9a',
      main: '#ff3c36',
      dark: '#9a0400',
    },
    secondary: {
      light: '#929292',
      main: '#262626',
      dark: '#131313',
    },
    text: {
      primary: '#222222',
      secondary: '#e2e2e2',
      disabled: '#717171',
    },
    grey: {
      50: '#fafafa',
      100: '#f5f5f5',
      200: '#eeeeee',
      300: '#e0e0e0',
      400: '#bdbdbd',
      500: '#9e9e9e',
      600: '#757575',
      700: '#616161',
      800: '#424242',
      900: '#212121',
      A100: '#f5f5f5',
      A200: '#eeeeee',
      A400: '#bdbdbd',
      A700: '#616161',
    },
  },
  zIndex: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})
