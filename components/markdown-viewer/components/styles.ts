import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
  img: {
    width: '100%',
    margin: `${theme.spacing(3)}px 0px`,
  },
  heading: {
    margin: `${theme.spacing(3)}px 0px`,
    '&:first-of-type': {
      marginTop: '0 !important',
    },
  },
}))

export default useStyles
