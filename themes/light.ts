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
    textNormal: {
      light: '#909090',
      main: '#222222',
      dark: '#111111',
    },
    textReversed: {
      light: '#f0f0f0',
      main: '#e2e2e2',
      dark: '#717171',
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
})
