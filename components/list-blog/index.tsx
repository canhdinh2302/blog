import { memo } from 'react'
import BlogItem from '../blog-item'

const ListBlog = () => (
  <>
    <BlogItem />
    <BlogItem />
    <BlogItem />
    <BlogItem />
    <BlogItem />
    <BlogItem />
    <BlogItem />
  </>
  )

export default memo(ListBlog)
