import React from 'react'
import { Divider, Typography } from '@mui/material'

const SectonTitle = ({ children }) => (
  <div className="flex items-center mb-24">
    <Typography className="flex-shrink-0 uppercase font-bold">{children}</Typography>

    <Divider className="ml-12 border-t-3 w-12/12 flex-shrink" />
  </div>
)

export default React.memo(SectonTitle)
