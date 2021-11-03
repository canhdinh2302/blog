import React from 'react'
import faker from 'faker'
import { Paper } from '@mui/material'
import { sample } from 'lodash'

const BlogCover = () => (
  <div className="aspect-w-16 aspect-h-9 relative">
    <img
      src={faker.internet.avatar()}
      alt="alt"
      className="w-12/12 h-12/12 object-cover"
      loading="lazy"
    />

    <Paper
      elevation={3}
      className="absolute top-16 left-16 py-4 px-8 w-content h-content font-bold bg-primary-main text-text-secondary"
    >
      {sample(['JavaScript', 'ReactJs', 'CSS', 'VS Code tips'])}
    </Paper>
  </div>
)

export default React.memo(BlogCover)
