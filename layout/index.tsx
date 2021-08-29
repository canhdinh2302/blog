import { memo } from 'react'
import { Container, ThemeProvider, Typography } from '@material-ui/core/'
import Header from './header'
import Footer from './footer'
import useStyles from './styles'
import { theme } from './ultis'
import PageTitle from './page-title'

const Layout = ({ children }) => {
  const styles = useStyles()

  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PageTitle>
        <Typography variant="h3" align="center">DinhNC Blog</Typography>
        <Typography align="center">Chia sẻ kiến thức lập trình Javascript và Ruby</Typography>
      </PageTitle>
      <Container maxWidth="md" classes={{ root: styles.container }}>
        { children }
      </Container>
      <Footer />
    </ThemeProvider>
  )
}

export default memo(Layout)
