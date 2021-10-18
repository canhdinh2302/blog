/* eslint-disable react/no-danger */
import { memo, useEffect, useState } from 'react'
import { Paper } from '@mui/material'
import { useRouter } from 'next/router'
import MarkdownViewer from '../components/markdown-viewer'
import RattingStars from '../components/ratting-stars'

const Details = () => {
  const router = useRouter()
  const [blog, setBlog] = useState(null)
  const slug = router.query.blog
  const rattingData = {
    value: 4,
    size: 36,
    edit: true,
  }

  useEffect(() => {
    if (!slug) return

    const handler = async () => {
      try {
        const { getDetailsBySlus } = await import('../api/blogAPI')
        const res = await getDetailsBySlus('java-script-la-gi')
        // const res = await getDetailsBySlus(slug.toString())
        setBlog(res)
      } catch (_error) {
        router.push('/')
      }
    }

    handler()
  }, [slug])

  return (
    blog && (
      <>
        <Paper elevation={3}>
          <MarkdownViewer source={blog.content} />
        </Paper>
        <RattingStars rattingData={rattingData} />
      </>
    )
  )
}

export default memo(Details)
