import { memo, useState, useEffect } from 'react'
import { Grid, Paper, Container } from '@material-ui/core/'
import useStyles from './styles'
import HeaderLogo from '../../components/header/logo'
import NavBar from '../../components/header/nav-bar'

const Header = () => {
  const [elevation, setElevation] = useState(0)
  const styles = useStyles()

  useEffect(() => {
    document.addEventListener('scroll', () => {
      setElevation(window.scrollY === 0 ? 0 : 3)
    })
  }, [])

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
