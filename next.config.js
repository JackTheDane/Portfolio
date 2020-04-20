const withOptimizedImages = require('next-optimized-images');
const path = require('path')

module.exports = withOptimizedImages({
  exportTrailingSlash: false,
  exportPathMap: function () {
    return {
      '/': { page: '/' }
    };
  },
  webpack(config, options) {
    config.resolve.alias['images'] = path.join(__dirname, 'public/images')
    return config
  },
});
