// steps = [0, 1, 2,..., 12]
const range = (max) => Array.from(Array(max + 1).keys())

const DEFAULT_SPACE = 8

const width = {}
const minWidth = {}
const maxWidth = {}

const height = {}
const minHeight = {}
const maxHeight = {}

const padding = {}
const margin = {}

const fontSize = {}

const borderRadius = {
  none: '0',
  full: '9999px',
}

const borderWidth = {}

const zIndex = {
  mobileStepper: 1000,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500,
}

const full = {
  full: '100%',
}

range(12).forEach((index) => {
  width[index] = `${index * DEFAULT_SPACE}px`
  minWidth[index] = `${index * DEFAULT_SPACE}px`
  maxWidth[index] = `${index * DEFAULT_SPACE}px`

  height[index] = `${index * DEFAULT_SPACE}px`
  minHeight[index] = `${index * DEFAULT_SPACE}px`
  maxHeight[index] = `${index * DEFAULT_SPACE}px`

  padding[index] = `${(index * DEFAULT_SPACE) / 2}px`
  margin[index] = `${(index * DEFAULT_SPACE) / 2}px`
  borderRadius[index] = `${(index * DEFAULT_SPACE) / 2}px`

  borderWidth[index] = `${index}px`

  width[`${index}/12`] = `calc(100% * ${index} / 12)`
  minWidth[`${index}/12`] = `calc(100% * ${index} / 12)`
  maxWidth[`${index}/12`] = `calc(100% * ${index} / 12)`

  height[`${index}/12`] = `calc(100% * ${index} / 12)`
  minHeight[`${index}/12`] = `calc(100% * ${index} / 12)`
  maxHeight[`${index}/12`] = `calc(100% * ${index} / 12)`
})

range(64).forEach((index) => {
  fontSize[index] = `${index}px`
})

module.exports = {
  important: true,
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: { ...width, ...full },
      minWidth: { ...minWidth, ...full },
      maxWidth: { ...maxWidth, ...full },
      height: { ...height, ...full },
      minHeight: { ...minHeight, ...full },
      maxHeight: { ...maxHeight, ...full },
      padding,
      margin,
      fontSize,
      borderRadius,
      borderWidth,
      zIndex,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
