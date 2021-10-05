import { createTheme } from '@mui/material'
import { grey, deepPurple } from '@mui/material/colors'

export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    allVariants: {
      color: grey[700],
      fontWeight: 700,
    },
    body1: {
      color: grey[500],
      fontSize: '16px',
      fontWeight: 400,
    },
  },
  palette: {
    primary: {
      light: deepPurple[300],
      main: deepPurple[400],
      dark: deepPurple[500],
    },
  }
})
