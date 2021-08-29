import { createTheme } from '@material-ui/core'
import { grey } from '@material-ui/core/colors'

export const theme = createTheme({
  typography: {
    fontFamily: 'Open Sans',
    allVariants: {
      color: grey[800],
      fontWeight: 700,
    },
    body1: {
      color: grey[500],
      fontSize: '18px',
      fontWeight: 400,
    },
  },
})
