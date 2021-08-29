import { makeStyles } from '@material-ui/core/styles'
import { grey } from '@material-ui/core/colors'

const useStyles = makeStyles({
  footer: {
    height: 'var(--header-height)',
    background: grey[900],
    color: 'white',
  },
})

export default useStyles
