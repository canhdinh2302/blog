import { memo } from 'react'
import {
  Container, ThemeProvider, NoSsr, Grid,
} from '@material-ui/core/'
import PageTitleProvider from './page-title-context'
import Header from './header'
import Footer from './footer'
import useStyles from './styles'
import { theme } from './ultis'
import PageTitle from './page-title'
import RightMenu from './right-menu'

const Layout = ({ children }) => {
  const styles = useStyles()

  return (
    <PageTitleProvider>
      <NoSsr>
        <ThemeProvider theme={theme}>
          <Header />
          <PageTitle />
          <Container maxWidth="md" classes={{ root: styles.container }}>
            <Grid container spacing={8}>
              <Grid item xs={12} sm={8}>
                { children }
              </Grid>

              <Grid item xs={12} sm={4}>
                <RightMenu />
              </Grid>
            </Grid>
          </Container>
          <Footer />
        </ThemeProvider>
      </NoSsr>
    </PageTitleProvider>
  )
}

export default memo(Layout)
