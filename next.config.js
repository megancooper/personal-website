const withPlugins = require('next-compose-plugins');
const withOptimizedImages = require('next-optimized-images');
const withBundleAnalyzer = require('@next/bundle-analyzer')

const nextConfig = {
  /**
   * Required for next-optimized-images to
   * optimize images
   */
  images: {
    disableStaticImages: true,
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing',
      },
    ]
  }
}

module.exports = withPlugins(
  [
    [
      withOptimizedImages,
      {
        optimizeImagesInDev: true,
        mozjpeg: {
          quality: 90,
        },
        webp: {
          preset: 'default',
          quality: 90,
        },
        responsive: {
          adapter: require('responsive-loader/sharp')
        }
      },
    ],
    [
      withBundleAnalyzer,
      {
        enabled: process.env.ANALYZE === 'true',
      },
    ],
  ],
  nextConfig
);
