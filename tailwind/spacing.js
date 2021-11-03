const steps = require('./baseSteps')

const spacing = {}

steps.forEach((index) => {
  spacing[index] = `${index}px`
})

module.exports = spacing
