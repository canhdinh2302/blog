import { memo } from 'react'
import {
  Container, ThemeProvider, Typography, NoSsr, Grid,
} from '@material-ui/core/'
import Header from './header'
import Footer from './footer'
import useStyles from './styles'
import { theme } from './ultis'
import PageTitle from './page-title'
import RightMenu from './right-menu'

const Layout = ({ children }) => {
  const styles = useStyles()

  return (
    <NoSsr>
      <ThemeProvider theme={theme}>
        <Header />
        <PageTitle>
          <Typography variant="h3" align="center">React và những người bạn</Typography>
          <Typography align="center">Chia sẻ kiến thức lập trình Javascript và Ruby</Typography>
        </PageTitle>
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
  )
}

export default memo(Layout)
