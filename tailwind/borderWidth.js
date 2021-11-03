const arrays = Array.from(Array(5).keys())
const borderWidth = {}

arrays.forEach((index) => {
  borderWidth[index] = `${index}px`
})

module.exports = borderWidth
