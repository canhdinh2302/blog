const withSvgr = require('next-plugin-svgr')

module.exports = withSvgr({
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  },
  svgrOptions: {
    titleProp: true,
    icon: true,
    svgProps: {
      height: '16px',
      width: '16px',
    },
  },
})
