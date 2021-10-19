import React from 'react'
import { Typography, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import classname from 'classname'
import links from './constants/links'

const useStyles = makeStyles((theme: Theme) => ({
  navLink: {
    '&:hover': {
      color: theme.palette.textReversed.main,
      background: theme.palette.secondary.main,
      transition: '0.25s',
    },
  },
}))

const NavLinks = React.memo(() => {
  const styles = useStyles()

  return (
    <ul className="hidden lg:flex h-full">
      {links.map((link, index) => (
        <Typography
          key={index}
          component="li"
          className={classname('flex items-center px-16 cursor-pointer font-bold', styles.navLink)}
        >
          {link.name}
        </Typography>
      ))}
    </ul>
  )
})

export default NavLinks
