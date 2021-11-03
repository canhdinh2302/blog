import React from 'react'
import { Avatar, Chip } from '@mui/material'
import faker from 'faker'

const UserInfo = () => (
  <Chip avatar={<Avatar src={faker.internet.avatar()} />} label="Avatar" variant="outlined" />
)

export default React.memo(UserInfo)
