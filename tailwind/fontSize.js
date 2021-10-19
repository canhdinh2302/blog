const arrays = Array.from(Array(37).keys())
const STEP = 2

const fontSize = {}

arrays.forEach((index) => {
  fontSize[`${index * STEP}`] = `${index * STEP}px`
})

module.exports = fontSize
