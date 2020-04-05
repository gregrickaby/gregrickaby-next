// next.config.js
const withOptimizedImages = require('next-optimized-images')
module.exports = withOptimizedImages([
  [
    // https://github.com/cyrilwanner/next-optimized-images
    withOptimizedImages,
    {
      inlineImageLimit: 8192,
      imagesFolder: 'images',
      imagesName: '[name]-[hash].[ext]',
      handleImages: ['jpeg', 'png', 'svg', 'webp'],
      optimizeImages: true,
      optimizeImagesInDev: true,
      mozjpeg: {
        quality: 80
      },
      optipng: {
        optimizationLevel: 2
      },
      svgo: {},
      webp: {
        preset: 'default',
        quality: 75
      }
    }
  ]
])
