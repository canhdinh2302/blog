import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  footer: {
    height: 'var(--header-height)',
    background: theme.palette.grey[900],
    color: 'white',
  },
}))

export default useStyles
