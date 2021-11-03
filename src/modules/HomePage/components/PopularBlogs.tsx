import React from 'react'
import BlogItem from '@components/BlogItem'
import SectonTitle from '@components/SectonTitle'

const PopularBlogs = () => (
  <div>
    <SectonTitle>Bài viết nổi bật</SectonTitle>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-48">
      {Array.from(Array(5).keys()).map((index) => (
        <BlogItem key={index} isVertical />
      ))}
    </div>
  </div>
)

export default React.memo(PopularBlogs)
