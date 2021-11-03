import React, { useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import useLayout from '@layouts/hooks/useLayout'
import clsx from 'clsx'

const useStyles = makeStyles({
  appContainer: ({
    headerHeight = 0,
    footerHeight = 0,
  }: {
    headerHeight: number
    footerHeight: number
  }) => ({
    minHeight: `calc(100vh - ${headerHeight + footerHeight}px)`,
  }),
})

const AppContainer = React.memo(({ children }) => {
  const { headerHeight, footerHeight } = useLayout()
  const styles = useStyles({ headerHeight, footerHeight })

  useEffect(() => {
    console.log({ headerHeight, footerHeight })
  }, [headerHeight, footerHeight])

  return (
    <section id="app-container" className={clsx(styles.appContainer, 'container p-32 mx-auto')}>
      {children}
    </section>
  )
})

export default AppContainer
