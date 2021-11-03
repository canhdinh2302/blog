const withSvgr = require('next-plugin-svgr')

module.exports = withSvgr({
  reactStrictMode: true,
  env: {
    APP_NAME: process.env.APP_NAME,
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
