import { memo } from 'react'
import {
 Paper, Box, Typography, List, ListItem,
} from '@mui/material'
import useStyles from './styles'

const RightMenu = () => {
  const styles = useStyles()

  return (
    <>
      <Paper elevation={3}>
        <Box p={3}>
          <Typography variant="h5" align="center">Bài viết gần đây</Typography>
          <List>
            <ListItem className={styles.listItem}>JavaScript là gì?</ListItem>
            <ListItem className={styles.listItem}>JavaScript là gì?</ListItem>
            <ListItem className={styles.listItem}>JavaScript là gì?</ListItem>
            <ListItem className={styles.listItem}>JavaScript là gì?</ListItem>
            <ListItem className={styles.listItem}>JavaScript là gì?</ListItem>
            <ListItem className={styles.listItem}>JavaScript là gì?</ListItem>
          </List>
        </Box>
      </Paper>

      <Paper elevation={3}>
        <Box p={3} mt={4}>
          <Typography variant="h5" align="center">Danh mục</Typography>
          <List>
            <ListItem className={styles.listItem}>JavaScript</ListItem>
            <ListItem className={styles.listItem}>ReactJS</ListItem>
            <ListItem className={styles.listItem}>Ruby on Rails</ListItem>
          </List>
        </Box>
      </Paper>
    </>
  )
}

export default memo(RightMenu)
