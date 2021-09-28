import {
 memo, useState, useEffect, createContext,
} from 'react'
import {
 Grid, Paper, Container, AppBar,
} from '@material-ui/core/'
import { HeaderLogo, NavBar } from '../../components/header'
import useStyles from './styles'

export const MobileViewContext = createContext(null)
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
    })
    setResponsiveness()
    window.addEventListener('resize', () => setResponsiveness())
    return () => {
      window.removeEventListener('resize', () => setResponsiveness())
    }
  }, [])
    const handleDrawerOpen = () => {
      setState((prevState) => ({
        ...prevState,
        isOpenDrawer: !isOpenDrawer,
      }))
    }
    const handleDrawerClose = () => {
      setState((prevState) => ({
        ...prevState,
        isOpenDrawer: false,
      }))
    }
    console.log(mobileView)
    return (
      <MobileViewContext.Provider
        value={{
          handleDrawerOpen,
          handleDrawerClose,
          isOpenDrawer,
          mobileView,
        }}
      >
        { mobileView
          ? (
            <AppBar style={{ backgroundColor: '#fff', color: '#000' }}>
              <NavBar />
            </AppBar>
          )
          : (
            <Paper elevation={elevation} classes={{ root: styles.header }}>
              <Container maxWidth="md">
                <Grid justifyContent="space-between" container>
                  <HeaderLogo />
                  <NavBar />
                </Grid>
              </Container>
            </Paper>
        )}
      </MobileViewContext.Provider>
    )
}

export default memo(Header)
