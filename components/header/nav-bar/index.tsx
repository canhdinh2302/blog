import { memo } from 'react'
import {
 List, ListItem, Toolbar, IconButton, Drawer,
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import useStyles from './styles'
import NavMenu from '../nav-menu'
import { navItems } from '../ultils'

const NavBar = (props) => {
  const { mobileView } = props
  const styles = useStyles()
  const renderNavBar = () => {
    if (mobileView) {
      return (
        <Toolbar>
          <IconButton
            {...{
              edge: 'start',
              color: 'primary',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: props.handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            {...{
              anchor: 'left',
              open: props.isOpenDrawer,
              onClose: props.handleDrawerOpen,
            }}
          >
            {navItems.map((navItem, index) => (
              <ListItem className={styles.navItem} key={index}>
                <NavMenu {...navItem} />
              </ListItem>
        ))}
          </Drawer>
          <div>My blog</div>
        </Toolbar>
      )
    }
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
  return renderNavBar()
}
export default memo(NavBar)
