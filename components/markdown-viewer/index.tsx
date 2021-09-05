/* eslint-disable react/no-children-prop */
import { Box } from '@material-ui/core'
import { memo } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { HeadingTypography, BodyTypography, Image } from './components'

export interface Props { source: string }

const MarkdownViewer = memo(({ source }: Props) => {
  const content = source.split(/\n+|\\n+/)

  return (
    <Box p={3}>
      {content.map((el, index) => (
        <ReactMarkdown
          key={index}
          children={el}
          remarkPlugins={[remarkGfm]}
          components={{
            h1: HeadingTypography,
            h2: HeadingTypography,
            h3: HeadingTypography,
            h4: HeadingTypography,
            h5: HeadingTypography,
            h6: HeadingTypography,
            p: BodyTypography,
            img: Image,
          }}
        />
      ))}
    </Box>
  )
})

export default MarkdownViewer
