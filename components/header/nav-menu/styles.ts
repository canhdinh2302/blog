import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  menu: {
    position: 'relative',
    cursor: 'pointer',
    '& [data-menu="trigger"]': {
      display: 'flex',
      fontWeight: 'bold',
      whiteSpace: 'nowrap',
      color: theme.palette.grey[700],
    },
    '& [data-menu="menu-container"]': {
      position: 'absolute',
      top: '100%',
      left: '50%',
      width: 240,
      maxHeight: 0,
      transform: 'translateX(-50%)',
      transition: '0.2s',
      opacity: 0,
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
        color: theme.palette.primary.main,
      },
      '& [data-menu="menu-container"]': {
        maxHeight: 500,
        paddingTop: theme.spacing(3),
        opacity: 1,
      },
      '&::after': {
        borderBottom: `2px solid ${theme.palette.primary.main}`,
      },
    },
  },
  menuItem: {
    fontWeight: 'bold',
    color: theme.palette.grey[700],
    '&:hover': {
      color: theme.palette.primary.main,
    },
  },
  hidden: {
    visibility: 'hidden',
    width: 0,
  },
}))

export default useStyles
