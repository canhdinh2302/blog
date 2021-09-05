import { memo, useState } from 'react'
import {
 ListItem, Paper, List, Collapse, ListItemIcon,
} from '@material-ui/core/'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Link from 'next/link'
import ListItemText from '@material-ui/core/ListItemText'
import ExpandLess from '@material-ui/icons/ExpandLess'
import ExpandMore from '@material-ui/icons/ExpandMore'
import StarBorder from '@material-ui/icons/StarBorder'
import useStyles from './styles'
import { NavItemInterface } from '../ultils'

const NavMenu = ({ title, items, link } : NavItemInterface) => {
  const styles = useStyles()
  const [open, setOpen] = useState(false)
  console.log(open)
  const handleClick = () => {
    setOpen(!open)
  }
   if (true) {
     return (
       <List
         component="nav"
         aria-labelledby="nested-list-subheader"
         className={styles.root}
       >
         <ListItem button style={{padding: '10px'}}>
           { items
            ? (
              <>
                <ListItem button onClick={handleClick} className={styles.title}>
                  <ListItemText primary={title} />
                  {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="ul" disablePadding>
                    <ListItem>
                      {
                        items.map((item, index) => (
                          <Link href={item.link} key={index}>
                            <ListItem>{item.text}</ListItem>
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
