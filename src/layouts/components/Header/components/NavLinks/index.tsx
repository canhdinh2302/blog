import React from 'react'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import Link from 'next/link'
import links from './constants/links'

const NavLinks = ({
  className,
  itemsClassName,
}: {
  className: string
  itemsClassName?: string
}) => (
  <ul className={className}>
    {links.map((link, index) => (
      <Link href={link.href} key={index}>
        <Typography
          component="li"
          className={clsx(
            'flex items-center px-16 cursor-pointer font-bold hover:text-text-secondary hover:bg-secondary-main duration-200',
            itemsClassName
          )}
        >
          {link.name}
        </Typography>
      </Link>
    ))}
  </ul>
)

export default React.memo(NavLinks)
