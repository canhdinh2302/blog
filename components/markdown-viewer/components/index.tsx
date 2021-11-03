import { memo } from 'react'
import { Typography } from '@mui/material'
import clsx from 'clsx'
import ImageLazyCustom from '../../lazy-image'
import useStyles from './styles'

interface ImageProps {
  alt?: string
  src?: string
}

export const HeadingTypography = memo(({ children }) => {
  const styles = useStyles()

  return (
    <Typography variant="h5" align="justify" className={clsx(styles.heading, styles.element)}>
      {children}
    </Typography>
  )
})

export const BodyTypography = memo(({ children }) => {
  const styles = useStyles()

  return (
    <Typography
      align="justify"
      variantMapping={{
        body1: 'div',
      }}
      className={clsx(styles.p, styles.element)}
    >
      {children}
    </Typography>
  )
})

export const Image = memo(({ alt, src }: ImageProps) => {
  const styles = useStyles()

  return <ImageLazyCustom alt={alt} src={src} containerClass={clsx(styles.img, styles.element)} />
})
