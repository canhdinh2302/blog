import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    height: 'var(--header-height)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndex.tooltip,
  },
  logo: {
    height: '48px',
    width: '48px',
  },
}))

export default useStyles
