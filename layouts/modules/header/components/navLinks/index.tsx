import React from 'react'
import { Typography, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import classname from 'classname'
import Link from 'next/link'
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

const NavLinks = React.memo(
  ({ className, itemsClassName }: { className: string; itemsClassName?: string }) => {
    const styles = useStyles()

    return (
      <ul className={className}>
        {links.map((link, index) => (
          <Link href={link.href} key={index}>
            <Typography
              component="li"
              className={classname(
                'flex items-center px-16 cursor-pointer font-bold',
                styles.navLink,
                itemsClassName
              )}
            >
              {link.name}
            </Typography>
          </Link>
        ))}
      </ul>
    )
  }
)

export default NavLinks
