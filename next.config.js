module.exports = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: '/api/thumbnail.png',
        destination: '/api/thumbnail'
      }
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Replace React with Preact in client production build: https://blogify.dev/egoist/how-i-made-my-next-js-build-50-percent-smaller
    if (!dev && !isServer) {
      Object.assign(config.resolve.alias, {
        react: 'preact/compat',
        'react-dom/test-utils': 'preact/test-utils',
        'react-dom': 'preact/compat'
      });
    }
    return config;
  }
};
