import React from 'react'
import clsx from 'clsx'
import BlogCover from './components/BlogCover'
import BlogInfo from './components/BlogInfo'

interface BlogItemInterface {
  isVertical?: boolean
}

const BlogItem = ({ isVertical }: BlogItemInterface) => (
  <div className={clsx('grid gap-24 grid-cols-1', isVertical || 'sm:grid-cols-2')}>
    <BlogCover />
    <BlogInfo isVertical={isVertical} />
  </div>
)

BlogItem.defaultProps = {
  isVertical: false,
}

export default React.memo(BlogItem)
