import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import clsx from 'clsx'
import Link from 'next/link'

const useStyles = makeStyles({
  textLogo: {
    fontFamily: '"Luckiest Guy", cursive !important',
  },
})

const AppLogo = React.memo(({ className = null }: { className?: string }) => {
  const styles = useStyles()

  return (
    <Link href="/">
      <Typography
        className={clsx(styles.textLogo, 'cursor-pointer', className || 'text-24 sm:text-48')}
      >
        {process.env.APP_NAME}
      </Typography>
    </Link>
  )
})

export default AppLogo
