import React from 'react'
import moment from 'moment'
import faker from 'faker'
import { Divider, Typography } from '@mui/material'
import RattingStars from '@components/RattingStars'
import { sample } from 'lodash'

interface BlogInfoInterface {
  isVertical?: boolean
}

const BlogInfo = ({ isVertical = false }: BlogInfoInterface) => (
  <div className="flex flex-col justify-between">
    <Typography variant="h6" className="line-clamp-3 text-justify">
      {faker.lorem.sentences(sample([1, 2]))}
    </Typography>
    <Typography className="opacity-40">{moment(faker.date.past()).format('DD/MM/YYYY')}</Typography>
    <Divider />
    {isVertical || (
      <>
        <Typography className="line-clamp-3 text-justify">{faker.lorem.sentences(5)}</Typography>
        <Divider />
        <RattingStars />
      </>
    )}
  </div>
)

export default React.memo(BlogInfo)
