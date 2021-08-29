import { Grid, Typography } from '@material-ui/core/'
import { memo } from 'react'
import useStyles from './styles'

const Footer = () => {
  const styles = useStyles()

  return (
    <Grid direction="row" alignItems="center" justifyContent="center" classes={{ root: styles.footer }} container>
      <Typography>DinhNC Blog</Typography>
    </Grid>
  )
}

export default memo(Footer)
