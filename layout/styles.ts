import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: `calc(
      100vh -
      var(--header-height) -
      var(--footer-height) -
      var(--page-title-height)
    )`,
    padding: `80px ${theme.spacing(3)}px`,
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing(3)}px`,
    },
  },
  leftContent: {
    paddingRight: '0 !important',
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0 !important',
      paddingRight: `${theme.spacing(4)}px !important`,
    },
  },
  rightContent: {
    [theme.breakpoints.down('sm')]: {
      paddingTop: '0 !important',
    },
  },
}))

export default useStyles
