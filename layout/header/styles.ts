import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: any) => ({
  header: {
    position: 'fixed',
    top: 0,
    right: 0,
    left: 0,
    height: 'var(--header-height)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: theme.zIndex.appBar,
  },
  logo: {
    height: '48px',
    width: '48px',
  },
}))

export default useStyles
