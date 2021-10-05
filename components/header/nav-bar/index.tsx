import { memo } from 'react'
import { List, ListItem } from '@mui/material'
import useStyles from './styles'
import { navItems } from '../ultils'
import NavMenu from '../nav-menu'

const NavBar = () => {
  const styles = useStyles()

  return (
    <List component="nav" className={styles.navBar}>
      {navItems.map((navItem, index) => (
        <ListItem className={styles.navItem} key={index}>
          <NavMenu {...navItem} />
        </ListItem>
      ))}
    </List>
  )
}

export default memo(NavBar)
