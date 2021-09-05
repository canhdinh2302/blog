import { memo, useEffect, useContext } from 'react'
import ListBlog from '../components/list-blog'

import { PageTitleContext } from '../layout/page-title-context'

const Home = () => {
  const { restorePageTitle } = useContext(PageTitleContext)

  useEffect(() => {
    restorePageTitle()
  }, [])

  return <ListBlog />
}

export default memo(Home)
