module.exports = {
  /**
   * Environment variables go here
   */
  env: {
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/landing',
      },
    ]
  },
};
