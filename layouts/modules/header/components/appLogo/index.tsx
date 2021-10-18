import React from 'react'
import { Typography, Theme } from '@mui/material'
import { makeStyles } from '@mui/styles'
import classname from 'classname'
import Link from 'next/link'

const useStyles = makeStyles((theme: Theme) => ({
  textLogo: {
    fontFamily: '"Luckiest Guy", cursive !important',
    color: `${theme.palette.secondary.main} !important`,
  },
}))

const AppLogo = React.memo(() => {
  const styles = useStyles()

  return (
    <Link href="/">
      <Typography className={classname(styles.textLogo, 'text-24 sm:text-48 cursor-pointer')}>
        React & Friends
      </Typography>
    </Link>
  )
})

export default AppLogo
