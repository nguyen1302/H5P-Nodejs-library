// eslint-disable-next-line @typescript-eslint/no-require-imports
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/h5p',
    createProxyMiddleware({
      target: 'http://192.168.1.143:8080/h5p',
      changeOrigin: true,
    })
  );
};