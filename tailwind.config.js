const lineClamp = require('@tailwindcss/line-clamp')

const {
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
} = require('./tailwind/widthHeight')

const { margin, padding } = require('./tailwind/marginPading')
const zIndex = require('./tailwind/zIndex')
const fontSize = require('./tailwind/fontSize')
const borderRadius = require('./tailwind/borderRadius')
const borderWidth = require('./tailwind/borderWidth')

module.exports = {
  important: true,
  purge: [],
  darkMode: 'class',
  theme: {
    width,
    maxWidth,
    minWidth,
    height,
    maxHeight,
    minHeight,
    margin,
    padding,
    fontSize,
    borderRadius,
    borderWidth,
    zIndex,
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [lineClamp],
}
