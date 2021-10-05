import { memo } from 'react'
import Link from 'next/link'
import { IconButton } from '@mui/material'
import useStyles from './styles'

const HeaderLogo = () => {
  const styles = useStyles()

  return (
    <Link href="/">
      <IconButton>
        <img src="/images/logo.svg" alt="logo.svg" className={styles.logo} />
      </IconButton>
    </Link>
  )
}

export default memo(HeaderLogo)
