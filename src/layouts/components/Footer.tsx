import React from 'react'
import { Typography } from '@mui/material'

const Footer = () => (
  <footer id="app-footer" className="text-center bg-secondary-main">
    <Typography className="cursor-pointer text-24 sm:text-48 font-logo text-text-secondary">
      {process.env.APP_NAME}
    </Typography>
  </footer>
)

export default React.memo(Footer)
