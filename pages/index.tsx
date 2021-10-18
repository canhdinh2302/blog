import React from 'react'
import { Button } from '@mui/material'
import useModal from '@hooks/useModal'
import LoginForm from '@modules/loginForm'
import ListBlog from '../components/list-blog'

const Home = React.memo(() => {
  const { openModal, Modal } = useModal({
    title: 'Đăng nhập',
  })

  return (
    <>
      <Button variant="outlined" onClick={openModal}>
        Đăng nhập
      </Button>

      <Modal>
        <LoginForm />
      </Modal>

      <ListBlog />
    </>
  )
})

export default Home
