import React from 'react'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import Link from 'next/link'

const AppLogo = ({ className = null }: { className?: string }) => (
  <Link href="/">
    <Typography className={clsx('cursor-pointer font-logo', className || 'text-24 sm:text-48')}>
      {process.env.APP_NAME}
    </Typography>
  </Link>
)

export default React.memo(AppLogo)
