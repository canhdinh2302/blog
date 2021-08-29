import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  container: {
    minHeight: 'calc(100vh - var(--header-height) - var(--footer-height) - var(--page-title-height))',
    padding: theme.spacing(3),
  },
}))

export default useStyles
