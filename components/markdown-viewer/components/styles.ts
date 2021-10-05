import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: any) => ({
  element: {
    '&:first-of-type': {
      marginTop: '0 !important',
    },
    '&:last-of-type': {
      marginBottom: '0 !important',
    },
  },
  img: {
    width: '100%',
    margin: `${theme.spacing(3)}px 0`,
  },
  heading: {
    margin: `${theme.spacing(3)}px 0`,
  },
  p: {
    margin: `${theme.spacing(3)}px 0`,
  },
}))

export default useStyles
