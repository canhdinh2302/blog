import React from 'react'
import { makeStyles } from '@mui/styles'
import { Theme, Typography } from '@mui/material'
import clsx from 'clsx'

const useStyles = makeStyles((theme: Theme) => ({
  footer: {
    background: theme.palette.secondary.main,
  },
  textLogo: {
    color: theme.palette.textReversed.main,
    fontFamily: '"Luckiest Guy", cursive !important',
  },
}))

const Footer = React.memo(() => {
  const styles = useStyles()

  return (
    <footer id="app-footer" className={clsx(styles.footer, 'text-center')}>
      <Typography className={clsx(styles.textLogo, 'cursor-pointer text-24 sm:text-48')}>
        {process.env.APP_NAME}
      </Typography>
    </footer>
  )
})

export default Footer
