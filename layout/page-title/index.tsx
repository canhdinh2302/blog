import { memo } from 'react'
import { Grid, Container } from '@material-ui/core/'
import useStyles from './styles'

const PageTitle = ({ children }) => {
  const styles = useStyles()

  return (
    <Grid className={styles.pageTitle} justifyContent="center" alignItems="center" container>
      <Container maxWidth="md">
        { children }
      </Container>
    </Grid>
  )
}

export default memo(PageTitle)
