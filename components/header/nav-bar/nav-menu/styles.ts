import { makeStyles } from '@material-ui/core/styles'
import { deepPurple } from '@material-ui/core/colors'

const useStyles = makeStyles((theme) => ({
  menu: {
    position: 'relative',
    cursor: 'pointer',
    '& [data-menu="trigger"]': {
      display: 'flex',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
    },
    '& [data-menu="menu-container"]': {
      position: 'absolute',
      top: '100%',
      left: '50%',
      width: 240,
      maxHeight: 0,
      transform: 'translateX(-50%)',
      transition: '0.2s',
      overflow: 'hidden',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: '100%',
      right: 0,
      left: 0,
      paddingTop: theme.spacing(1),
      borderBottom: '2px solid transparent',
    },
    '&:hover': {
      '& [data-menu="trigger"]': {
        color: deepPurple[400],
      },
      '& [data-menu="menu-container"]': {
        maxHeight: 500,
        paddingTop: theme.spacing(3),
        overflow: 'unset',
      },
      '&::after': {
        borderBottom: `2px solid ${deepPurple[400]}`,
      },
    },
  },
  menuItem: {
    fontWeight: 'bold',
    '&:hover': {
      color: deepPurple[400],
    },
  },
  hidden: {
    visibility: 'hidden',
    width: 0,
  },
}))

export default useStyles
