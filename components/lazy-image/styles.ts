import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  '@keyframes show': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  '@keyframes noImageShow': {
    '0%': {
      opacity: 0,
    },
    '100%': {
      opacity: 1,
    },
  },
  container: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
    animation: '$show 1s',
  },
  containerLoading: {
    position: 'relative',
    width: '100%',
    paddingTop: '56.25%',
  },
  imgBox: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  },
  loadingBox: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
  },
  img: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  noImageBox: {
    position: 'absolute',
    top: '0',
    left: '0',
    bottom: '0',
    right: '0',
    animation: '$noImageShow 1s',
  },
})

export default useStyles
