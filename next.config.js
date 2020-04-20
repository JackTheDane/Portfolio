const withOptimizedImages = require('next-optimized-images');

module.exports = withOptimizedImages({
  exportTrailingSlash: false,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  }
});
