const arrays = Array.from(Array(49).keys())
const STEP = 16

const width = {
  auto: 'auto',
  full: '100%',
  'full-vw': '100vw',
}
const maxWidth = {
  full: '100%',
  'full-vw': '100vw',
}
const minWidth = {
  full: '100%',
  'full-vw': '100vw',
}

const height = {
  full: '100%',
  'full-vh': '100vh',
}
const maxHeight = {
  full: '100%',
  'full-vh': '100vh',
}
const minHeight = {
  full: '100%',
  'full-vh': '100vh',
}

arrays.forEach((index) => {
  width[`${index * STEP}`] = `${index * STEP}px`
  maxWidth[`${index * STEP}`] = `${index * STEP}px`
  minWidth[`${index * STEP}`] = `${index * STEP}px`

  height[`${index * STEP}`] = `${index * STEP}px`
  maxHeight[`${index * STEP}`] = `${index * STEP}px`
  minHeight[`${index * STEP}`] = `${index * STEP}px`

  if (index > 12) return
  width[`${index}/12`] = `calc(100% * ${index} / 12)`
  width[`${index}/12-vw`] = `calc(100vw * ${index} / 12)`

  maxWidth[`${index}/12`] = `calc(100% * ${index} / 12)`
  maxWidth[`${index}/12-vw`] = `calc(100vw * ${index} / 12)`

  minWidth[`${index}/12`] = `calc(100% * ${index} / 12)`
  minWidth[`${index}/12-vw`] = `calc(100vw * ${index} / 12)`

  height[`${index}/12`] = `calc(100% * ${index} / 12)`
  height[`${index}/12-vh`] = `calc(100vh * ${index} / 12)`

  maxHeight[`${index}/12`] = `calc(100% * ${index} / 12)`
  maxHeight[`${index}/12-vh`] = `calc(100vh * ${index} / 12)`

  minHeight[`${index}/12`] = `calc(100% * ${index} / 12)`
  minHeight[`${index}/12-vh`] = `calc(100vh * ${index} / 12)`
})

module.exports = {
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
}
