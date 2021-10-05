import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  pageTitle: {
    height: 'var(--page-title-height)',
    width: '100%',
    marginTop: 'var(--header-height)',
    backgroundImage: 'url("/images/header-background.png")',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },
})

export default useStyles
