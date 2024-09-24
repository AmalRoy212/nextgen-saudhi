const { legacyCreateProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api1',
    legacyCreateProxyMiddleware({
      target: 'https://utrechtitconsulting.com/api/index.php',
      changeOrigin: true,
    })
  );
  app.use(
    '/api2',
    legacyCreateProxyMiddleware({
      target: 'https://utrechtitconsulting.com/api/getNextgenData.php',
      changeOrigin: true,
    })
  );
};