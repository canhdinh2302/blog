import { memo } from 'react'
import ReactStars from 'react-rating-stars-component'

const RattingStars = (props) => {
  const { rattingData } = props
  const ratingChanged = async (point) => {
    try {
      const { voteStar } = await import('../../api/blogAPI')
      const res = await voteStar('lead-marketing-assistant', point)
      console.log(res)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ReactStars
      value={rattingData.value}
      count={5}
      size={rattingData.size}
      edit={rattingData.edit}
      activeColor="#ffd700"
      onChange={ratingChanged}
    />
  )
}
RattingStars.defaultProps = {
  rattingData: {
    value: 4,
    size: 24,
    edit: false,
  },
}
export default memo(RattingStars)
