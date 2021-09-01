import { memo, createContext, useState } from 'react'

const defaultPageTitle = {
  title: 'React và những người bạn',
  subTitle: 'Chia sẻ kiến thức lập trình Javascript và ReactJs',
}

export const PageTitleContext = createContext(null)

const PageTitleProvider = ({ children }) => {
  const [pageTitle, setPageTitle] = useState(defaultPageTitle)

  return (
    <PageTitleContext.Provider
      value={{
        pageTitle,
        setPageTitle,
        restorePageTitle: () => setPageTitle(defaultPageTitle),
      }}
    >
      {children}
    </PageTitleContext.Provider>
  )
}

export default memo(PageTitleProvider)
