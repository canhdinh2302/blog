import { memo, useEffect, useContext } from 'react'
import { Button } from '@mui/material'
import useModal from '@hooks/useModal'
import LoginForm from '@modules/loginForm'
import ListBlog from '../components/list-blog'
import { PageTitleContext } from '../layout/page-title-context'

const Home = () => {
  const { restorePageTitle } = useContext(PageTitleContext)
  const { openModal, Modal } = useModal({
    title: 'Đăng nhập',
  })

  useEffect(() => {
    restorePageTitle()
  }, [])

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
}

export default memo(Home)
