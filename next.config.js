const withPlugins = require('next-compose-plugins');
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
  reactStrictMode: true,
  /**
   * Accessibility: Adds "lang" attribute to <html> tag
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  /**
   * Required for next-optimized-images to
   * optimize images
   */
  images: {
    // disableStaticImages: true,
    domains: [
      'res.cloudinary.com'
    ],
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing',
      },
    ]
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
}

module.exports = nextConfig;

module.exports = withPlugins(
  [
    [
      withBundleAnalyzer,
    ],
  ],
  nextConfig
);
