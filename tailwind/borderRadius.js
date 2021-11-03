const steps = require('./baseSteps')

const borderRadius = {
  full: '9999px',
}

steps.forEach((index) => {
  borderRadius[index] = `${index}px`
})

module.exports = borderRadius
