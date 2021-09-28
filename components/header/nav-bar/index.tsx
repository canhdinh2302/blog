import { memo, useContext } from 'react'
import {
 List, ListItem, Toolbar, IconButton, Drawer,
} from '@material-ui/core/'
import MenuIcon from '@material-ui/icons/Menu'
import CloseIcon from '@material-ui/icons/Close'
import useStyles from './styles'
import NavMenu from '../nav-menu'
import { navItems } from '../ultils'
import { MobileViewContext } from '../../../layout/header'

const NavBar = () => {
  const styles = useStyles()
  console.log(useContext(MobileViewContext))
  const {
    isOpenDrawer, handleDrawerOpen, handleDrawerClose, mobileView,
  } = useContext(MobileViewContext)
  console.log(`navbar ${mobileView}`)
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
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            {...{
              anchor: 'left',
              open: isOpenDrawer,
              onClose: handleDrawerOpen,
            }}
          >
            <CloseIcon
              className={styles.closeIcon}
              onClick={handleDrawerClose}
            />
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
