const arrays = Array.from(Array(25).keys())
const STEP = 4

const margin = {
  auto: 'auto',
}
const padding = {}

arrays.forEach((index) => {
  margin[`${index * STEP}`] = `${index * STEP}px`
  padding[`${index * STEP}`] = `${index * STEP}px`
})

module.exports = {
  margin,
  padding,
}
