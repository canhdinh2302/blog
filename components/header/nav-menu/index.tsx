import { memo, useState, useContext } from 'react'
import {
  ListItem, Paper, List, Collapse,
} from '@material-ui/core/'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Link from 'next/link'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import useStyles from './styles'
import { MobileViewContext } from '../../../layout/header'
import { NavItemInterface } from '../ultils'

const NavMenu = ({ title, items, link } : NavItemInterface) => {
  const styles = useStyles()
  const [open, setOpen] = useState(false)
  const { mobileView } = useContext(MobileViewContext)

  const handleClick = () => {
    setOpen(!open)
  }

  if (mobileView) {
    return (
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        className={styles.root}
      >
        <ListItem
          classes={{ root: styles.listItemRoot, gutters: styles.itemGutters }}
        >
          {items ? (
            <>
              <ListItem button onClick={handleClick} className={styles.title}>
                <ListItemText primary={title} />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItem>
              <Collapse in={open} timeout="auto" unmountOnExit>
                <List component="ul" disablePadding>
                  <ListItem classes={{ root: styles.listItemRoot }}>
                    {
                      items.map((item, index) => (
                        <Link href={item.link} key={index}>
                          <ListItem
                            classes={{ gutters: styles.itemGutters }}
                          >
                            {item.text}
                          </ListItem>
                        </Link>
                      ))
                    }
                  </ListItem>
                </List>
              </Collapse>
            </>
          ) : (
            <Link href={link}>
              {title}
            </Link>
          )}
        </ListItem>
      </List>
      )
    }

  return (
    <div className={styles.menu}>
      {items ? (
        <div data-menu="trigger">
          { title }
          <KeyboardArrowDownIcon />
        </div>
      ) : (
        <Link href={link}>
          <div data-menu="trigger">
            { title }
            <KeyboardArrowDownIcon className={styles.hidden} />
          </div>
        </Link>
      )}

      {items && (
        <div data-menu="menu-container">
          <Paper elevation={3}>
            <List component="ul">
              {items.map((item, index) => (
                <Link href={item.link} key={index}>
                  <ListItem
                    button
                    className={styles.menuItem}
                  >
                    {item.text}
                  </ListItem>
                </Link>
              ))}
            </List>
          </Paper>
        </div>
      )}

    </div>
  )
}

export default memo(NavMenu)
