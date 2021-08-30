import { memo } from 'react'
import { ListItem, Paper, List } from '@material-ui/core/'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import Link from 'next/link'
import useStyles from './styles'
import { NavItemInterface } from '../ultils'

const NavMenu = ({ title, items, link } : NavItemInterface) => {
  const styles = useStyles()

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
                  <ListItem button className={styles.menuItem}>{item.text}</ListItem>
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
