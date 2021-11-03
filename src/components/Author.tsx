import React from 'react'
import faker from 'faker'
import { Typography, Avatar } from '@mui/material'
import { sample } from 'lodash'

const Author = () => (
  <div className="grid grid-cols-12 gap-24 h-content">
    <div className="col-span-4 flex items-center">
      <Avatar
        src={faker.internet.avatar()}
        alt="avt"
        className="w-12/12 object-cover aspect-w-1 aspect-h-1"
      />
    </div>

    <div className="col-span-8 flex items-center">
      <div className="flex flex-col">
        <Typography variant="h6">{faker.lorem.words(1)}</Typography>
        <Typography>{sample([20, 25, 30, 35])} tuổi</Typography>
        <Typography>{sample(['Google Inc.', 'Facebook Inc.'])}</Typography>
        <Typography>{sample([20, 25, 30, 35])} bài viết</Typography>
      </div>
    </div>
  </div>
)

export default React.memo(Author)
