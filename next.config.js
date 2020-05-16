const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');
const path = require('path')

module.exports = withPlugins([
  [
    withOptimizedImages, {}
  ]
], {
  exportTrailingSlash: false,
  webpack(config, options) {
    config.resolve.alias['data'] = path.join(__dirname, 'data')
    config.resolve.alias['images'] = path.join(__dirname, 'public/images')
    config.resolve.alias['components'] = path.join(__dirname, 'components')
    config.resolve.alias['hooks'] = path.join(__dirname, 'hooks')
    config.resolve.alias['models'] = path.join(__dirname, 'models')
    config.resolve.alias['utils'] = path.join(__dirname, 'utils')
    config.resolve.alias['icons'] = path.join(__dirname, 'components/reusables/icons')
    return config
  },
});
