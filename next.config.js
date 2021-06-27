module.exports = {
  reactStrictMode: true,
  eslint: {
    dirs: ['pages', 'components', 'layouts', 'lib', 'hooks']
  },
  async rewrites() {
    return [
      {
        source: '/api/thumbnail.png',
        destination: '/api/thumbnail'
      }
    ];
  }
};
