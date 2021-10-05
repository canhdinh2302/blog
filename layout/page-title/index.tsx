import { memo, useContext } from 'react'
import { Grid, Container, Typography } from '@mui/material'
import { PageTitleContext } from '../page-title-context'
import useStyles from './styles'

const PageTitle = () => {
  const styles = useStyles()
  const { pageTitle } = useContext(PageTitleContext)

  return (
    <Grid
      className={styles.pageTitle}
      justifyContent="center"
      alignItems="center"
      container
    >
      <Container maxWidth="md">
        <Typography variant="h3" align="center">
          {pageTitle.title}
        </Typography>
        <Typography align="center">{pageTitle.subTitle}</Typography>
      </Container>
    </Grid>
  )
}

export default memo(PageTitle)
