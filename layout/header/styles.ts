import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  header: {
    position: 'sticky',
    top: 0,
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