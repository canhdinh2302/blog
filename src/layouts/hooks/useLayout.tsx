import { useState, useEffect, useCallback } from 'react'

const useLayout = () => {
  const [result, setResult] = useState({
    headerHeight: 0,
    footerHeight: 0,
  })

  const handler = useCallback(() => {
    const header = document.querySelector('header#app-header')
    const footer = document.querySelector('footer#app-footer')

    setResult({
      headerHeight: header?.clientHeight || 0,
      footerHeight: footer?.clientHeight || 0,
    })
  }, [])

  useEffect(() => {
    handler()

    window.addEventListener('resize', handler)
  }, [])

  return result
}

export default useLayout
