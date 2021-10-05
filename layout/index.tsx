import { memo } from 'react'
import { Container, NoSsr, Grid } from '@mui/material'
import PageTitleProvider from './page-title-context'
import Header from './header'
import Footer from './footer'
import useStyles from './styles'
import PageTitle from './page-title'
import RightMenu from './right-menu'

const Layout = ({ children }) => {
  const styles = useStyles()

  return (
    <PageTitleProvider>
      <NoSsr>
        <Header />
        <PageTitle />
        <Container maxWidth="md" className={styles.container}>
          <Grid container spacing={8}>
            <Grid item xs={12} md={8} className={styles.leftContent}>
              { children }
            </Grid>

            <Grid item xs={12} md={4} className={styles.rightContent}>
              <RightMenu />
            </Grid>
          </Grid>
        </Container>
        <Footer />
      </NoSsr>
    </PageTitleProvider>
  )
}

export default memo(Layout)
