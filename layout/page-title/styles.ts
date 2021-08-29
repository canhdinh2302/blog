import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  pageTitle: {
    height: 'var(--page-title-height)',
    width: '100%',
    backgroundImage: 'url("/images/header-background.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
})

export default useStyles
