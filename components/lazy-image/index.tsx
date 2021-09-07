import { memo } from 'react'
import { LazyImage } from 'react-lazy-images'
import { CircularProgress, Box } from '@material-ui/core'
import classname from 'classname'
import useStyles from './styles'

interface ImageProps {
  alt?: string;
  src?: string;
  imgClass?: string;
  containerClass?: string;
}

const ImageLazyCustom = memo(({
  alt, src, imgClass, containerClass,
}: ImageProps) => {
  const styles = useStyles()

  return (
    <LazyImage
      alt={alt}
      src={src}
      placeholder={({ ref }) => (
        <Box
          textAlign="center"
          className={classname(containerClass, styles.containerLoading)}
        >
          <Box
            className={styles.noImageBox}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <svg
              ref={ref}
              xmlns="http://www.w3.org/2000/svg"
              id="Layer_1"
              data-name="Layer 1"
              viewBox="0 0 512 512"
              width="40"
              height="40"
            >
              <path
                // eslint-disable-next-line max-len
                d="M256,10A246,246,0,0,0,82.052,429.949a246,246,0,1,0,347.9-347.9A244.39,244.39,0,0,0,256,10ZM90.537,421.463A234,234,0,0,1,413.655,83.085l-82.812,87.369-5.485-21.769a32.076,32.076,0,0,0-31.139-24.267h-76.65a32.034,32.034,0,0,0-31.195,24.5l-5.4,22.138H132.112A32.148,32.148,0,0,0,100,203.164V355.47a32.167,32.167,0,0,0,25.659,31.46l-33.88,35.745C91.366,422.269,90.947,421.873,90.537,421.463ZM274.9,246.92a31.349,31.349,0,1,1-42.894,45.255Zm-49.012,34.265A31.375,31.375,0,0,1,263.6,241.4Zm46.78-49.355a43.357,43.357,0,0,0-55.846,58.92l-18.509,19.527a69.182,69.182,0,0,1,92.858-97.967Zm-48.951,69.09a43.348,43.348,0,1,0,59.468-62.741l17.8-18.777A69.173,69.173,0,1,1,205.922,319.7Zm75.873-97.492A81.155,81.155,0,0,0,189.9,319.155l-53.483,56.426h-4.3A20.134,20.134,0,0,1,112,355.47V203.164a20.134,20.134,0,0,1,20.112-20.111h53.57a6,6,0,0,0,5.828-4.577l6.521-26.715a20.065,20.065,0,0,1,19.538-15.343h76.65a20.09,20.09,0,0,1,19.5,15.2l6.778,26.9a6,6,0,0,0,.876,1.923ZM197.662,328.409A81.167,81.167,0,1,0,309.241,210.69l26.195-27.637h44.452A20.134,20.134,0,0,1,400,203.164V355.47a20.134,20.134,0,0,1-20.112,20.111H152.95Zm223.8,93.054a233.988,233.988,0,0,1-320.928,9.419l41.041-43.3H379.888A32.148,32.148,0,0,0,412,355.47V203.164a32.148,32.148,0,0,0-32.112-32.111H346.81l75.5-79.651a233.979,233.979,0,0,1-.843,330.061Z"
              />
            </svg>
          </Box>
        </Box>
      )}
      actual={({ imageProps }) => (
        <Box
          textAlign="center"
          className={classname(containerClass, styles.container)}
        >
          <Box className={styles.imgBox}>
            <img
              {...imageProps}
              className={classname(imgClass, styles.img)}
              alt={alt}
            />
          </Box>
        </Box>
      )}
      loading={() => (
        <Box className={classname(containerClass, styles.containerLoading)}>
          <Box
            className={styles.imgBox}
            display="flex"
            justifyContent="center"
            alignItems="center"
          >
            <CircularProgress />
          </Box>
        </Box>
      )}
    />
  )
})

export default ImageLazyCustom