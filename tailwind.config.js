const lineClamp = require('@tailwindcss/line-clamp')
const aspectRatio = require('@tailwindcss/aspect-ratio')

const {
  width,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
} = require('./tailwind/widthHeight')

const zIndex = require('./tailwind/zIndex')
const fontSize = require('./tailwind/fontSize')
const borderRadius = require('./tailwind/borderRadius')
const borderWidth = require('./tailwind/borderWidth')
const screens = require('./tailwind/screens')
const spacing = require('./tailwind/spacing')
const colors = require('./tailwind/colors')
const fontFamily = require('./tailwind/fontFamily')

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
    fontSize,
    borderRadius,
    borderWidth,
    zIndex,
    extend: {},
    screens,
    spacing,
    colors,
    fontFamily,
  },
  variants: {
    extend: {},
  },
  plugins: [lineClamp, aspectRatio],
}
