module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: 'tokensecretstring'
  },
  publicRuntimeConfig: {
    apiUrl: process.env.NODE_ENV === 'development'
      ? 'http://103.50.206.12:5000/api/v1' // development api
      : 'http://103.50.206.12:5000/api/v1' // production api
  }
}