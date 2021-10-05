import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme: any) => ({
  listItem: {
    borderBottom: `1px solid ${theme.palette.grey[500]}`,
    cursor: 'pointer',
    '&::before': {
      content: '""',
      height: 8,
      width: 8,
      marginRight: 8,
      background: theme.palette.primary.main,
    },
  },
}))

export default useStyles
