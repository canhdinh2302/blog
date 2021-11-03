import React, { useState } from 'react'
import BlogItem from '@components/BlogItem'
import { Button } from '@mui/material'
import SectonTitle from '@components/SectonTitle'

const RecentBlogs = () => {
  const [page, setPage] = useState(1)

  return (
    <div>
      <SectonTitle>Bài viết gần đây</SectonTitle>
      <div className="grid grid-cols-1 gap-48">
        {Array.from(Array(10 * page).keys()).map((index) => (
          <BlogItem key={index} />
        ))}

        <Button
          variant="contained"
          size="large"
          className="py-16 rounded-t-0 rounded-b-16"
          onClick={() => setPage(page + 1)}
        >
          Hiển thị thêm
        </Button>
      </div>
    </div>
  )
}

export default React.memo(RecentBlogs)
