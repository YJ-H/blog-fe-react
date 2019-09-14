const proxy = require('http-proxy-middleware');
module.exports = function(app) {
console.log(12312321312,app)
  app.use(
    proxy('/api', { 
      target: 'http://localhost:3300', 
      pathRewrite: {
      '^/api': '', // rewrite path
      }
    })
  );
};