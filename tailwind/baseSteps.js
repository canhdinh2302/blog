const step = 4
const arrays = Array.from(Array(25).keys())

module.exports = arrays.map((el) => el * step)
