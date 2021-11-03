import { makeStyles } from '@mui/styles'
import { Theme } from '@mui/material'

const useStyles = makeStyles((theme: Theme) => ({
  boxContainer: {
    '&:last-of-type': {
      marginBottom: '0 !important',
    },
  },
  paperContainer: {
    height: 200,
    position: 'relative',
    paddingLeft: 240,
    cursor: 'pointer',
  },
  leftContent: {
    position: 'absolute',
    top: 12,
    right: 'calc(100% - 240px)',
    bottom: 0,
    left: 12,
    padding: '12px 0 0 12px',
    borderTop: `1px solid ${theme.palette.grey[500]}`,
    borderLeft: `1px solid ${theme.palette.grey[500]}`,
    borderRadius: 8,
  },
  blogImg: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    borderRadius: 8,
  },
  updatedDate: {
    position: 'absolute',
    top: 0,
    right: 0,
    paddingLeft: 8,
    fontSize: 13,
    transform: 'translateY(-50%)',
    background: 'white',
  },
  categoryName: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: '0 8px 0 16px',
    fontSize: 13,
    transform: 'rotate(-90deg) translateY(50%)',
    transformOrigin: 'bottom left',
    background: 'white',
    borderRadius: 16,
  },
  infoBox: {
    height: '100%',
  },
  title: {
    display: '-webkit-box',
    marginBottom: theme.spacing(1),
    '-webkit-line-clamp': 2,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
  description: {
    display: '-webkit-box',
    '-webkit-line-clamp': 4,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
  },
}))

export default useStyles
