import { memo } from 'react'
import {
 List, ListItem,
} from '@mui/material'
import useStyles from './styles'
import NavMenu from '../nav-menu'
import { navItems } from '../ultils'

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
