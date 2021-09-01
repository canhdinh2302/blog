/* eslint-disable react/no-danger */
import { memo, useContext, useEffect } from 'react'
import { Box, Paper } from '@material-ui/core'
import { PageTitleContext } from '../layout/page-title-context'

const Details = () => {
  const { setPageTitle } = useContext(PageTitleContext)

  useEffect(() => {
    setPageTitle({
      title: 'Hooks API Reference',
      subTitle: 'The first blog',
    })
  }, [])

  return (
    <Paper elevation={3}>
      <Box
        p={3}
        dangerouslySetInnerHTML={{
          __html: `
            <h2>1. Introducing Hooks</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorem facere tempora ullam necessitatibus illo harum laudantium vitae at, est quibusdam obcaecati fugit. Quasi harum voluptatem consectetur voluptates dolorum non.</p>
            <h2>2 .Introducing Hooks</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorem facere tempora ullam necessitatibus illo harum laudantium vitae at, est quibusdam obcaecati fugit. Quasi harum voluptatem consectetur voluptates dolorum non.</p>
            <h2>3. Introducing Hooks</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorem facere tempora ullam necessitatibus illo harum laudantium vitae at, est quibusdam obcaecati fugit. Quasi harum voluptatem consectetur voluptates dolorum non.</p>
            <h2>3. Introducing Hooks</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos dolorem facere tempora ullam necessitatibus illo harum laudantium vitae at, est quibusdam obcaecati fugit. Quasi harum voluptatem consectetur voluptates dolorum non.</p>
          `,
        }}
      />
    </Paper>
  )
}

export default memo(Details)
