const arrays = Array.from(Array(13).keys())
const STEP = 2

const borderRadius = {
  full: '9999px',
}

arrays.forEach((index) => {
  borderRadius[`${index * STEP}`] = `${index * STEP}px`
})

module.exports = borderRadius
