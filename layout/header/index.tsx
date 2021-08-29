import { memo, useState, useEffect } from 'react'
import { Paper, Container, Typography } from '@material-ui/core/'
import useStyles from './styles'

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
        <Typography variant="h3">DinhNC Blog</Typography>
      </Container>
    </Paper>
  )
}

export default memo(Header)
