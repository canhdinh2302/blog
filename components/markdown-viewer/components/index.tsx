import { memo } from 'react'
import { Typography } from '@material-ui/core'
import ImageLazyCustom from '../../lazy-image'
import useStyles from './styles'

interface ImageProps {
  alt?: string;
  src?: string;
}

export const HeadingTypography = memo(({ children }) => {
  const styles = useStyles()

  return (
    <Typography
      variant="h5"
      align="justify"
      className={styles.heading}
    >
      {children}
    </Typography>
  )
})

export const BodyTypography = memo(({ children }) => (
  <Typography
    align="justify"
    variantMapping={{
      body1: 'div',
    }}
  >
    {children}
  </Typography>
))

export const Image = memo(({ alt, src }: ImageProps) => {
  const styles = useStyles()

  return (
    <ImageLazyCustom alt={alt} src={src} containerClass={styles.img} />
  )
})
