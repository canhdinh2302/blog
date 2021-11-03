import React from 'react'
import ReactStars from 'react-rating-stars-component'
import LoginForm from '@modules/loginForm'
import useModal from '@hooks/useModal'

const RattingStars = ({ rattingData }) => {
  const { openModal, Modal } = useModal({
    title: 'Đăng Nhập',
  })
  const ratingChanged = async (point) => {
    try {
      const { voteStar } = await import('@api/blogAPI')
      await voteStar('lead-marketing-assistant', point)
    } catch (error) {
      if (error.response !== undefined && error.response.data.statusCode === 401) {
        openModal()
      } else {
        // eslint-disable-next-line no-alert
        alert('Lỗi kết nỗi')
      }
    }
  }

  return (
    <>
      <ReactStars
        value={rattingData.value}
        count={5}
        size={rattingData.size}
        edit={rattingData.edit}
        activeColor="#ffd700"
        onChange={ratingChanged}
      />
      <Modal>
        <LoginForm />
      </Modal>
    </>
  )
}

RattingStars.defaultProps = {
  rattingData: {
    value: 4,
    size: 24,
    edit: false,
  },
}
export default React.memo(RattingStars)
