import {
 memo, useState, useEffect, useContext,
} from 'react'
import {
 Grid, Paper, Container, AppBar,
} from '@material-ui/core/'
import { HeaderLogo, NavBar } from '../../components/header'
import useStyles from './styles'

export const mobileViewContext = useContext(null)
const Header = () => {
  const [state, setState] = useState({
    elevation: 0,
    mobileView: false,
    isOpenDrawer: false,
  })

  const { elevation, mobileView, isOpenDrawer } = state
  const styles = useStyles()
  const setResponsiveness = () => setState((prevState) => ({
    ...prevState,
    mobileView: window.innerWidth < 900,
  }))
  useEffect(() => {
    document.addEventListener('scroll', () => {
      const currentElevation = window.scrollY === 0 ? 0 : 3
      setState((prevState) => ({
        ...prevState,
        elevation: currentElevation,
      }))
      console.log(mobileView)
    })
    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())
    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])

  const displayMobile = () => {
    const handleDrawerOpen = () => {
      setState((prevState) => ({
        ...prevState,
        isOpenDrawer: !isOpenDrawer,
      }))
    }
    return (
      <NavBar
        handleDrawerOpen={handleDrawerOpen}
        isOpenDrawer={isOpenDrawer}
        mobileView={mobileView}
      />
)
  }
  if (mobileView) {
    return (
      <AppBar style={{ backgroundColor: '#fff', color: '#000' }}>
        {displayMobile()}
      </AppBar>
    )
  }
  return (
    <Paper elevation={elevation} classes={{ root: styles.header }}>
      <Container maxWidth="md">
        <Grid justifyContent="space-between" container>
          <HeaderLogo />
          <NavBar />
        </Grid>
      </Container>
    </Paper>
  )
}

export default memo(Header)
