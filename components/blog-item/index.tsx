/* eslint-disable max-len */
import { memo } from 'react'
import Link from 'next/link'
import { Box, Paper, Typography } from '@mui/material'
import RattingStars from '../ratting-stars'
import useStyles from './styles'

const mockImg = 'https://res.cloudinary.com/canhdinh2302/image/upload/v1626253551/which-captain-america-character-are-you_wlaurd.jpg'

const BlogItem = () => {
  const styles = useStyles()
  return (
    <>
      <Link href="/js-la-gi">
        <Box mb={3} className={styles.boxContainer}>
          <Paper elevation={3} className={styles.paperContainer}>
            <Box className={styles.leftContent}>
              <img src={mockImg} alt="blog-img" className={styles.blogImg} />
              <Typography className={styles.updatedDate}>
                August 23, 2021
              </Typography>
              <Typography className={styles.categoryName}>
                JavaScript
              </Typography>
            </Box>

            <Box
              p={2}
              display="flex"
              flexDirection="column"
              justifyContent="center"
              className={styles.infoBox}
            >
              <Typography
                variant="h5"
                className={styles.title}
                title="JavaScript là gì?"
              >
                JavaScript là gì?
              </Typography>

              <Typography align="justify" className={styles.description}>
                JavaScrip là ngôn ngữ lập trình. Nó được tích hợp và nhúng vào
                HTML nhằm mục đích làm cho website trở nên sinh động hơn.
                JavaScrip nhẹ và được dùng phổ biến đến nỗi nó trở thành một
                phần không thể thiếu của website. Ngôn ngữ này cho phép người
                quản trị kiểm soát hành vi của website tốt hơn việc chỉ sử dụng
                thuần HTML.
              </Typography>
            </Box>
          </Paper>
        </Box>
      </Link>
      <RattingStars />
      <span>12 triệu lượt đánh giá</span>
    </>
  )
}

export default memo(BlogItem)
